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
  height: 270px;
  margin: 80px auto;
  background: #fff; 
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top: 20px;
`;

export const SignInBox = styled.div`
  width: 400px; 
  height: 450px;
  margin: 80px auto;
  background: #fff; 
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top: 20px;
`;

export const CodeBox = styled.div`
  width: 200px;
  margin: auto;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  border: 1px solid #e8e8e8;
  margin: 10px auto;
`;

export const InputSmall = styled.input`
  left: 56px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  border: 1px solid #e8e8e8;
  margin: 0 auto 0 auto;
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

export const ButtonSmall = styled.button`
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border: 1px solid transparent;
  border-radius: 15px;
  margin: 0;
  float: right;
  text-align: center;
  outline: none; 
`;

export const Title = styled.div`
  width: 220px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  text-align: center;
  font-style:italic; 
  font-weight:bold;
  font-size: 26px;
`;
