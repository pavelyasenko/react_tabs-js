import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './components/Tabs/constants';

export const App = () => (
  <div className="section">
    <h1 className="title">Selected tab is Tab 1</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <Tabs tabs={tabs}/>
      </div>
    </div>
  </div>
);
