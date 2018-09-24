import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'http://im5.leaderhero.com/wallpaper/20140312/08376831-7.jpg'
  },
  {
    id: 2,
    title: 'node学习',
    imgUrl: 'http://cdn.duitang.com/uploads/item/201507/10/20150710045602_wHEBf.jpeg'
  }],
  articleList: [
    {
      id: 1,
      title: '项目上线出现Bug产品经理却开除程序员! 网友: 销售转过来的?',
      desc: '如今的程序员，似乎处在一个很尴尬的位置，因为虽然做着高深的技术活，而且拿着很高的薪资，但是却经常被很多没有技术或者技术很浅的产品经理安排，让得很...',
      imgUrl: 'http://img5.imgtn.bdimg.com/it/u=1653797427,2897974308&fm=26&gp=0.jpg',
    },
    {
      id: 2,
      title: '项目上线出现Bug产品经理却开除程序员! 网友: 销售转过来的?',
      desc: '如今的程序员，似乎处在一个很尴尬的位置，因为虽然做着高深的技术活，而且拿着很高的薪资，但是却经常被很多没有技术或者技术很浅的产品经理安排，让得很...',
      imgUrl: 'http://img5.imgtn.bdimg.com/it/u=1653797427,2897974308&fm=26&gp=0.jpg',
    },
    {
      id: 3,
      title: '项目上线出现Bug产品经理却开除程序员! 网友: 销售转过来的?',
      desc: '如今的程序员，似乎处在一个很尴尬的位置，因为虽然做着高深的技术活，而且拿着很高的薪资，但是却经常被很多没有技术或者技术很浅的产品经理安排，让得很...',
      imgUrl: 'http://img5.imgtn.bdimg.com/it/u=1653797427,2897974308&fm=26&gp=0.jpg',
    }
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default :
      return state;
  }
};
  