import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quill from "quill";
import 'quill/dist/quill.snow.css';
import { WriteWrapper, ToolbarWrapper, EditorWrapper, Butten } from './style';
class Write extends Component {

  handleChange = () => {
    // change 事件将HTML字符串更新到state里面，
    this.setState({
      value: this.editor.root.innerHTML,
      mediaVisbile: false
    });
  };

  render() {
    return (
      <WriteWrapper>
        <ToolbarWrapper id="toolbar">
          <select className="ql-header" defaultValue="small">
            <option value="1">大标题</option>
            <option value="2">副标题</option>
            <option value="3">小标题</option>
          </select>
          <select className="ql-size" defaultValue="small">
            <option value="small">小字体</option>
            <option value="large">大字体</option>
            <option value="huge">巨大字体</option>
          </select>
          <select className="ql-color" defaultValue="black">
            <option value="black" />
            <option value="red" />
            <option value="yellow" />
            <option value="blue" />
            <option value="green" />
          </select>
          <select className="ql-background" defaultValue="">
            <option value="red" />
            <option value="yellow" />
            <option value="blue" />
            <option value="green" />
          </select>
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
          <button className="ql-script" value="sub"></button>
          <button className="ql-script" value="super"></button>
          <button className="ql-clean"></button>
          <button className="ql-image"></button>
          <button className="ql-video"></button>
		      <Butten
            onClick={() =>
              console.log("这里可以通过读取state来拿到所有的html字符串:", this.state)
            }
          >
            保存
          </Butten>
        </ToolbarWrapper>
        <EditorWrapper id="editor" />
      </WriteWrapper>
    )
  };

  componentDidMount() {
    // 配置项，在Quill 官网上有详细说明
    const options = {
      theme: "snow",
      modules: { // 自定义 toolbar 填写这个属性， 值写上 div 的 id
        toolbar: "#toolbar",
      }
    };
    // 实例化 Quill 并且储存在实例原型上
    this.editor = new Quill("#editor", options);
    // 实现输入受控，从state中读取html字符串写入编辑器中
    const value= '';
    // 判断value中是否有值，如果有那么就写入编辑器中
    if (value) this.editor.clipboard.dangerouslyPasteHTML(value);
    // 设置事件，change事件，
    this.editor.on("text-change", this.handleChange);
  }

}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Write);

