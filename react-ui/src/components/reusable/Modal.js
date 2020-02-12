import React from 'react'

const modalStyles = {
  position: 'absolute',
  top: '20%',
  right: '20%',
  bottom: '20%',
  left: '20%',
  background: 'gray',
}

const Modal = ({ content, buttonText, onConfirm, onClose, isOpen }) => {
  if (!isOpen) { return null }

  return (
    <div style={modalStyles}>
      <button type="button" onClick={onClose}>X</button>
      <div>{content}</div>
      <button type="button" onClick={onConfirm}>{buttonText}</button>
    </div>
  )
}

export default Modal
