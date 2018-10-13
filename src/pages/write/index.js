import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Write extends PureComponent {

  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    const { loginStatus } = this.props;
    if(loginStatus){
      return (
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
      )
    } else {
      return (
        <Redirect to = '/login' />
      )
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});




export default connect(mapState, null)(Write);
