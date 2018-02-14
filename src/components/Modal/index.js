import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";
import P from "prop-types";

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
          {...(typeof window !== "undefined"
            ? { appElement: window.document.getElementById("___gatsby") }
            : {})}
        >
          {children}
        </ReactModal>
      </Fragment>
    );
  }
}

function generateStyles() {
  return {
    content: {
      top: "0",
      left: "0",
      right: "auto",
      bottom: "auto",
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      // boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.50)',
      // maxWidth: '600px',
      width: "100%",
      height: "100%",
      padding: "0",
      borderRadius: "0",
      border: "0",
      overflow: "visible"
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
