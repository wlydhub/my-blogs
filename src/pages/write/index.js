import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Input, TextArea, ShowDiv } from './style';
import showdown from 'showdown';
const converter = new showdown.Converter();

class Write extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: converter.makeHtml(this.state.value) };
  }

  render() {
    return (
      <DetailWrapper>

        标题：<br />
        <Input /> <br />

        内容： <br /> 
        <TextArea
            onChange={this.handleChange}
            defaultValue={this.state.value}
        /><br /> 
        
        预览：<br />  
        <ShowDiv />

      </DetailWrapper>
    )
  };

}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Write);

