import React from 'react';

import ListData from './ListData';

class List extends React.Component {
  state = { isLoading: true }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000)
  }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>A list</h1>
        <ListData isLoading={this.state.isLoading}/>
      </>
    )
  }
}

export default List
