import styled from 'styled-components';
import React, { useState } from 'react'

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-around;
  appearance: none;
  background-color: transparent;
  border: none;
  display: block;
  font-size: 24px;
`

const AccordionContent = styled.div`
  display: ${props => props.isOpen ? 'initial' : 'none'}
`

const Accordion = ({ title, children, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    onToggle && onToggle()
  }

  return (
    <div>
      <AccordionButton type="button" onClick={handleClick}>
        <span>{title}</span>
        <span>{isOpen ? 'V' : '>'}</span>
      </AccordionButton>
      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </div>
  )
}

export default Accordion
