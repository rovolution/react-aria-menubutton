'use strict';

exports.__esModule = true;
exports['default'] = focusManager;
var focusManagerProto = {

  focusables: [],

  trigger: null,

  currentFocus: -1,

  move: function move(i) {
    this.focusables[i].node.focus();
    this.currentFocus = i;
  },

  moveUp: function moveUp() {
    var next = this.currentFocus === -1 || this.currentFocus === 0 ? this.focusables.length - 1 : this.currentFocus - 1;
    this.move(next);
  },

  moveDown: function moveDown() {
    var next = this.currentFocus === -1 || this.currentFocus === this.focusables.length - 1 ? 0 : this.currentFocus + 1;
    this.move(next);
  },

  moveToLetter: function moveToLetter(letter) {
    var cyclo = this.focusables.slice(this.currentFocus + 1).concat(this.focusables.slice(0, this.currentFocus + 1));
    for (var i = 0, l = cyclo.length; i < l; i++) {
      var item = cyclo[i];
      if (!item.text && !item.content.charAt) {
        throw new Error('AriaMenuButton items must have textual `content` or a `text` prop');
      }
      if (item.text) {
        if (item.text.charAt(0).toLowerCase() !== letter.toLowerCase()) continue;
      } else if (item.content.charAt(0).toLowerCase() !== letter.toLowerCase()) continue;
      item.node.focus();
      this.currentFocus = this.focusables.indexOf(item);
      return;
    }
  },

  focusTrigger: function focusTrigger() {
    this.trigger.focus();
  }

};

function focusManager() {
  return Object.create(focusManagerProto);
}

module.exports = exports['default'];