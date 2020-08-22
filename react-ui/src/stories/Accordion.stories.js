import React from 'react'

import Accordion from '../components/reusable/Accordion';

export default {
  title: 'Accordion',
  component: Accordion
}

const Template = args => (
  <Accordion {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary example',
  children: <p>Some content to render</p>
}


export const WithToggleEvent = Template.bind({})
WithToggleEvent.args = {
  title: 'With Click event example',
  onToggle: () => alert('click'),
  children: <p>Some content to render</p>
}
