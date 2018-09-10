import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid red;
  position: relative;
`
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
`