// Modal made here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

const modalAnchor = document.getElementById('modalAnchor');

const modalComponent = (props) => {
  return ReactDOM.createPortal(<div>{ props.children }</div>, modalAnchor)
}

export {modalComponent as ArticleDisplay}
