import styled from 'styled-components';

const Button = styled.button`
  width: auto;
  height: auto;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.dangerous ?  '#d9534f' : "#428bca")};
  border-color: ${props => (props.dangerous ?  '#d43f3a' : "#357ebd")};
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${props => (props.dangerous ?  '#d2322d' : "#3276b1")};
    border-color: ${props => (props.dangerous ?  '#ac2925' : "#285e8e")};
  }
`;

export default Button;
