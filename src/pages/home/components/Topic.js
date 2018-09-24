import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style.js';

class Topic extends Component{
  render() {
    return(
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key = { item.get('id') }>
                <img
                  className = 'topic-pic'
                  src = { item.get('imgUrl') }
                  alt = ''
                />
                { item.get('title') }
              </TopicItem>
            )
          })
        }
        <span>
          更多 >
        </span>
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);