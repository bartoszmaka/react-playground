import React from 'react'

import Accordion from './reusable/Accordion';

const Accordions = () => {
  return (
    <div>
      <h2>Accordion</h2>
      <Accordion title="First">
        <h3>Hi</h3>
      </Accordion>

      <Accordion title="Second">
        <h3>Sup</h3>
      </Accordion>
    </div>
  )
}

export default Accordions
