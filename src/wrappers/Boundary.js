import React, { Component } from 'react'

export class Boundary extends Component {
  state = {
    isError: false
  }

  componentDidCatch() {
    this.setState({ isError: true })
  }

  render() {
    return this.state.isError 
      ? <div>:(</div>
      : this.props.children
  }
}

export default Boundary
