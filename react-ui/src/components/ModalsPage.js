import React, { Component } from 'react'
import Modal from './reusable/Modal';

export class ModalsPage extends Component {
  state = {
    isFirstModalOpen: false,
    isSecondModalOpen: false,
  }

  onFirstConfirm = () => {
    this.closeFirstModal()
    console.log('OK')
  }

  onSecondConfirm = () => {
    this.closeSecondModal()
    alert('Boom')
  }

  closeFirstModal = () => {
    this.setState({isFirstModalOpen: false})
  }

  closeSecondModal = () => {
    this.setState({isSecondModalOpen: false})
  }

  openFirstModal = () => {
    this.setState({isFirstModalOpen: true})
  }

  openSecondModal = () => {
    this.setState({isSecondModalOpen: true})
  }

  render() {
    const { isFirstModalOpen, isSecondModalOpen } = this.state;
    return (
      <>
        <button type="button" onClick={this.openFirstModal}>Open First Modal</button>
        <button type="button" onClick={this.openSecondModal}>Open First Modal</button>
        <Modal
          isOpen={isFirstModalOpen}
          content="Confirm form submission"
          buttonText="Proceed"
          onConfirm={this.onFirstConfirm}
          onClose={this.closeFirstModal}
        />
        <Modal
          isOpen={isSecondModalOpen}
          content="Launch Rockets"
          buttonText="OK"
          onConfirm={this.onSecondConfirm}
          onClose={this.closeSecondModal}
        />
      </>
    )
  }
}

export default ModalsPage
