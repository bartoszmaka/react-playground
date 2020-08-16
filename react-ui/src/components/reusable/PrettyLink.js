import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrettyLink = styled(Link)`
  border: solid pink 2px;
  margin-right: 20px;
  color: ${props => props.theme.color};
  &:visited { color: ${props => props.theme.color}; }
  &:link { color: ${props => props.theme.color}; }
  &:active { color: ${props => props.theme.color}; }
`

export default PrettyLink
