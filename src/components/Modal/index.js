import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";
import P from "prop-types";
import Icon from "../Icon";

class Modal extends Component {
  state = {
    isOpen: false
  };

  onOpenHandler = () => {
    this.setState({ isOpen: true });
  };

  onCloseHandler = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { action, contentLabel, children } = this.props;
    return (
      <Fragment>
        {typeof action === "function" ? (
          action(isOpen, this.onOpenHandler)
        ) : (
          <button
            className="button button--primary"
            onClick={this.onOpenHandler}
          >
            Open Modal
          </button>
        )}
        <ReactModal
          isOpen={isOpen}
          contentLabel={contentLabel}
          onRequestClose={this.onCloseHandler}
          style={generateStyles()}
          closeTimeoutMS={250}
          {...(typeof window !== "undefined"
            ? { appElement: window.document.getElementById("___gatsby") }
            : {})}
        >
          <Fragment>
            <Helmet>
              <html className="modal--open" />
            </Helmet>
            {children}
          </Fragment>
          <button onClick={this.onCloseHandler} css={buttonCloseStyles}>
            <Icon name="close" />
          </button>
        </ReactModal>
      </Fragment>
    );
  }
}

function buttonCloseStyles() {
  return `
    appearance: none;
    background: none;
    border: 0;
    box-shadow: none;
    color: white;
    font-size: 44px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    position: absolute;
    top: 10px;
    right: 10px;
  `;
}

function generateStyles() {
  return {
    content: {
      top: "0",
      left: "0",
      right: "auto",
      bottom: "auto",
      width: "100%",
      height: "100%",
      padding: "0",
      borderRadius: "0",
      border: "0",
      overflowX: "hidden",
      overflowY: "auto",
      position: "fixed"
    },
    overlay: {
      zIndex: "2",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  };
}

Modal.propTypes = {
  open: P.bool,
  contentLabel: P.string,
  children: P.node,
  action: P.func
};

export default Modal;
