import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left : 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    width:125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  min-height: 50px;
  background: url(${ (props) => props.imgUrl });
  background-size: contain;
  margin-bottom: 6px;
  border-radius: 4px;
`;
export const WriterWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const WriterTitle = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;
export const WriterItem = styled.div`
  margin-top: 15px;
  .photo {
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right: 10px;
  }
  .attention {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .data {
    font-size: 12px;
    color: #969696;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
export const WriterInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
export const WriterLookAll = styled.div`
  width: 280px;
  height: 34px;
  margin-top: 20px;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align:center;
  line-height:19px;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
