import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid red;
  position: relative;
`;
export const Logo = styled.a`
  height: 58px;
  position: absolute;
  top: 0;
  left:0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${ logoPic });
  background-size: contain;
  background-repeat:no-repeat;
`;
export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size:17px;
  color:#333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color:#969696;
  }
  &.active {
    color:red;
  }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
  })`
  width: 160px;
  height:38px;
  margin-top: 8px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size:14px;
`;
export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height:56px;
`;Button
export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border: 1px solid red;
  font-size:14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color:#fff;
    background:#ec6149;
  }
`;