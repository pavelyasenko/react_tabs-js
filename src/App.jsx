import React from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './components/Tabs/constants';

export const App = () => (
  <div className="section">


    <div data-cy="TabsComponent">
      <Tabs tabs={tabs} />
    </div>
  </div>
);
