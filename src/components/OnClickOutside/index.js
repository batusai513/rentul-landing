import React, { Component } from 'react';
import P from 'prop-types';

export default class ClickOutComponent extends Component {
  static propTypes = {
    onClickOut: P.func.isRequired,
    className: P.string,
    children: P.node,
  };

  constructor(props) {
    super(props);
    this.elTouchIsClick = true;
    this.documentTouchIsClick = true;
    this.clickedElements = [];

    this.documentTouchStarted = this.documentTouchStarted.bind(this);
    this.documentTouchMoved = this.documentTouchMoved.bind(this);
    this.documentTouchEnded = this.documentTouchEnded.bind(this);
    this.documentClicked = this.documentClicked.bind(this);
    this.elementTouchMoved = this.elementTouchMoved.bind(this);
    this.elementTouchEnded = this.elementTouchEnded.bind(this);
    this.elementClicked = this.elementClicked.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.unmounted) return;
      this.toggleListeners('addEventListener');
    }, 0);
  }

  documentTouchStarted() {
    this.el.removeEventListener('click', this.elementClicked);
    document.removeEventListener('click', this.documentClicked);
  }

  documentTouchMoved() {
    this.documentTouchIsClick = false;
  }

  documentTouchEnded(e) {
    if (this.documentTouchIsClick) this.documentClicked(e);
    this.documentTouchIsClick = true;
  }

  documentClicked(e) {
    if ((e.clickedElements || []).indexOf(this.el) !== -1) return;
    const clickOutHandler = this.onClickOut || this.props.onClickOut;
    if (!clickOutHandler) {
      console.warn('onClickOut is not defined.');
    }

    clickOutHandler(this, e);
  }

  elementTouchMoved() {
    this.elTouchIsClick = false;
  }

  elementTouchEnded(e) {
    if (this.elTouchIsClick) this.elementClicked(e);
    this.elTouchIsClick = true;
  }

  elementClicked(e) {
    e.clickedElements = e.clickedElements || [];
    e.clickedElements.push(this.el);
  }

  toggleListeners = (listenerMethod) => {
    this.el[listenerMethod]('touchmove', this.elementTouchMoved);
    this.el[listenerMethod]('touchend', this.elementTouchEnded);
    this.el[listenerMethod]('click', this.elementClicked);

    document[listenerMethod]('touchstart', this.documentTouchStarted);
    document[listenerMethod]('touchmove', this.documentTouchMoved);
    document[listenerMethod]('touchend', this.documentTouchEnded);
    document[listenerMethod]('click', this.documentClicked);
  };

  componentWillUnmount() {
    this.toggleListeners('removeEventListener');
    this.unmounted = true;
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={(node) => {
          this.el = node;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
