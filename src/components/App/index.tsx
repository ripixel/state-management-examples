import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../reduxStore';

import Router from '../Router';

import './reset.scss';
import './styles.scss';

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Router />
  </ReduxProvider>
);

export default App;
