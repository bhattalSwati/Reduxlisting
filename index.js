/**
 * @format
 */

import {AppRegistry} from 'react-native';
import InitialScreen from './ReduxForm/InitialScreen';
//import UpdateDataScreen from './ReduxForm/UpdateDataScreen';
import {name as appName} from './app.json';
// import Store from './ReduxForm/Store';
// import { Provider } from 'react-redux';
// import { ReactDOM } from 'react';

AppRegistry.registerComponent(appName, () => InitialScreen);

// ReactDOM.render(
//     <Provider store={Store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )
