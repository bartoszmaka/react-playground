import styled from 'styled-components';

const Button = styled.button`
  margin-right: 15px;
  ${props => (props.kind === 'close') && 'background-color: red;'}
  ${props => (props.kind === 'edit') && 'background-color: lightblue;'}
  ${props => (props.kind === 'apply') && 'background-color: green;'}
`


export default Button

