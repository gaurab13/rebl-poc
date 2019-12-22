import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard';

export default function AppRouter () {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/icon" render={(props) => <MainContent {...props} walletPath={'icon'} />} />
      <Route path="/ethereum" render={(props) => <MainContent {...props} walletPath={'ethereum'} />} />
    </Switch>
  );
};
