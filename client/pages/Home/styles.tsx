import styled from '@emotion/styled';

export const Input = styled.input`
  outline: none;
  width: 68%;
  border: 2px solid #ffc4c4;
  box-sizing: border-box;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  -khtml-border-radius: 12px;
  border-radius: 12px;
  height: 56px;
  padding: 17px 20px;
  font-size: 14px;
`;

export const Button = styled.button`
  margin-left: 10px;
  background: red;
  box-shadow: 0 4px 10px rgba(255, 86, 63, 0.4);
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  -khtml-border-radius: 12px;
  border-radius: 12px;
  padding: 18px 40px;
  display: inline-block;
  border: none;
  color: #fdfdfe;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #4a474c;
    color: #fff;
    box-shadow: none;
  }
`;
