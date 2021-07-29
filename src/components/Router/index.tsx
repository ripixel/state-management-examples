import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Frame from '../Frame';

import Index from '../../pages/Index';
import Ref from '../../pages/Ref';
import Context from '../../pages/Context';
import State from '../../pages/State';
import Redux from '../../pages/Redux';
import Recoil from '../../pages/Recoil';
import MobX from '../../pages/MobX';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Frame>
      <Switch>
        <Route path='/ref'>
          <Ref />
        </Route>
        <Route path='/context'>
          <Context />
        </Route>
        <Route path='/state'>
          <State />
        </Route>
        <Route path='/redux'>
          <Redux />
        </Route>
        <Route path='/recoil'>
          <Recoil />
        </Route>
        <Route path='/mobx'>
          <MobX />
        </Route>
        <Route path='/'>
          <Index />
        </Route>
      </Switch>
    </Frame>
  </BrowserRouter>
);

export default Router;
