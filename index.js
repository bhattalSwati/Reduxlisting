/**
 * @format
 */

import {AppRegistry} from 'react-native';
import InitialScreen from './ReduxForm/InitialScreen';
import {name as appName} from './app.json';
import InitialScreenData from './ReduxForm/InitialScreen';
import store from './ReduxForm/Store';
import { Provider } from 'react-redux';

const Redux = () => {
   return (
      <Provider store = {store}>
        <InitialScreenData/>
      </Provider>
   )
}

AppRegistry.registerComponent(appName, () => Redux);

// ReactDOM.render(
//     <Provider store={Store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )
