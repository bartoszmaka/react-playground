import React, { Component } from 'react'
import axios from 'axios';

export class RequestCancellation extends Component {
  source = axios.CancelToken.source();
  state = {
    response: ''
  }

  componentWillUnmount() {
    this.source.cancel('Request cancelled')
  }

  handleClick = () => {
    axios.get('http://localhost:3001', { cancelToken: this.source.token })
      .then(({ data }) => this.setState({response: data}))
      .catch(error => axios.isCancel(error) ? console.log('cancelled') : console.error(error))
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Make a request</button>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}

export default RequestCancellation
