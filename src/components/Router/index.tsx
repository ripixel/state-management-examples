import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from '../../pages/Index';
import Ref from '../../pages/Ref';
import Context from '../../pages/Context';
import Frame from '../Frame';

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
          <Index />
        </Route>
        <Route path='/flux'>
          <Index />
        </Route>
        <Route path='/redux'>
          <Index />
        </Route>
        <Route path='/recoil'>
          <Index />
        </Route>
        <Route path='/mobx'>
          <Index />
        </Route>
        <Route path='/'>
          <Index />
        </Route>
      </Switch>
    </Frame>
  </BrowserRouter>
);

export default Router;
