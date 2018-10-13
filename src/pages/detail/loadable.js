import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../common/loading/index.js';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading,
});

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }

export default () => <LoadableComponent/>;
