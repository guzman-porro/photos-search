import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  outline: 0;
  border: 0;
  padding: 0 24px;
  height: 40px;
  background-color: #16adda;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  transition: background-color .8s;

  :hover {
    opacity: .8;
  }
`;

export default Button;
