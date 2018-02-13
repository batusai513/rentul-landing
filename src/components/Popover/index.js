import React, { Component } from "react";
import P from "prop-types";
import ClickOutside from "../OnClickOutside";

const popoverAction = `
  cursor: pointer;
  user-select: none;
`;

const popoverContent = `
  position: absolute;
  z-index: 10;
`;

class Popover extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  closeDropdown = () => {
    this.setState({ isOpen: false });
  };

  toggleDropdown = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeOnSelect = () => {
    if (!this.props.closeOnSelect) return;
    this.closeDropdown();
  };

  render() {
    const { action, children, className } = this.props;
    const { isOpen } = this.state;
    return (
      <ClickOutside
        className={`popover ${isOpen ? "is-open" : ""} ${className}`}
        onClickOut={this.closeDropdown}
      >
        <div
          className="popover__action"
          onClick={this.toggleDropdown}
          css={popoverAction}
        >
          {action(isOpen)}
        </div>
        {isOpen ? (
          <div
            className="popover__content"
            onClick={this.closeOnSelect}
            css={popoverContent}
          >
            {children}
          </div>
        ) : null}
      </ClickOutside>
    );
  }
}

Popover.displayName = "Popover";

Popover.propTypes = {
  action: P.func.isRequired,
  children: P.node.isRequired,
  closeOnSelect: P.bool,
  className: P.string
};

Popover.defaultProps = {
  closeOnSelect: false,
  className: ""
};

export default Popover;
