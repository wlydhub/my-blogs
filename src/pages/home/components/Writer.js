import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterTitle, WriterInfoSwitch, WriterItem, WriterLookAll } from '../style.js';

class Writer extends PureComponent{
  render() {
    return(
      <WriterWrapper>
        <WriterTitle>
          <span className='name'>
            推荐作者
          </span>
          <WriterInfoSwitch onClick = { () => this.props.handleChangePage(this.spanIcon) }> 
              <i ref = {(icon)=>{ this.spanIcon = icon }} className='iconfont spin'>&#xe851;</i> 
              换一换
          </WriterInfoSwitch>
        </WriterTitle>
        {
          this.props.list.map((item) => {
            return (
              <WriterItem key = {item.get('id')}>
                <img alt = '' className='photo' src = {item.get('photo')}/>
                <span className= 'attention'>关注</span>
                <span className='name'>{item.get('nickName')}</span>
                <p className='data'>写了{item.get('total_wordage')}字·{item.getIn('total_likes_count')}喜欢</p>
              </WriterItem>
            )
          })
        }
        <WriterLookAll>
          查看全部 >
        </WriterLookAll>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

const mapDispath = () => {
  return {
    handleChangePage(spin){
      // 用css旋转实现简单的动画效果
      // 使用ref获取到真是的dom直接操作dom样式
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
    }
  }
}

export default connect(mapState, mapDispath)(Writer);