import { FixedSizeList as List } from 'react-window';
import React, { Component } from 'react'

const items = new Array(500).fill(true).map((_, index) => ({
  id: index,
  value: Math.random()
}))

const RowRenderer = (props) => {
  const item = props.data[props.index]

  return (
    <div style={props.style}>{JSON.stringify(item, null, 2)}</div>
  )
}

export class HugeList extends Component {
  render() {
    return (
      <List
        height={450}
        itemCount={500}
        itemData={items}
        itemSize={30}
        width={400}
      >
        {RowRenderer}
      </List>
    )
  }
}

export default HugeList
