import React from 'react';
import { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './components/Tabs/constants';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const onTabSelected = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <div data-cy="TabsComponent">
        <Tabs
          activeTabIdChildElement={activeTabId}
          tabsChildElement={tabs}
          setActiveTabIdChildElement={setActiveTabId}
          onTabSelectedChildElement={onTabSelected}
        />
      </div>
    </div>
  );
};
