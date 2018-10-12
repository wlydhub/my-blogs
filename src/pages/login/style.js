import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px; 
  height: 220px;
  margin: 80px auto;
  background: #fff; 
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;
