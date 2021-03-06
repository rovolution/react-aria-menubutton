import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';
import cssClassnamer from './cssClassnamer';

export default class Menu extends Component {

  shouldComponentUpdate(newProps) {
    return this.props.selectedValue !== newProps.selectedValue;
  }

  componentWillMount() {
    this.props.focusManager.focusables = [];
  }

  componentDidMount() {
    if (this.props.receiveFocus) this.props.focusManager.move(0);
  }

  render() {
    const props = this.props;
    const selectedValue = props.selectedValue;

    const items = props.items.map((item, i) => {
      return (
        <li key={i}
         className={cssClassnamer.componentPart('menuItemWrapper')}
         role='presentation'>
          <MenuItem {...item}
           focusManager={props.focusManager}
           handleSelection={props.handleSelection}
           isSelected={item.value === selectedValue} />
        </li>
      );
    });

    const menuClasses = [cssClassnamer.componentPart('menu')];
    if (props.flushRight) menuClasses.push(cssClassnamer.componentPart('menu--flushRight'));

    return (
      <ol className={menuClasses.join(' ')}
       role='menu'>
        {items}
      </ol>
    );
  }
}

Menu.propTypes = {
  focusManager: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  flushRight: PropTypes.bool,
  handleSelection: PropTypes.func,
  receiveFocus: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};
