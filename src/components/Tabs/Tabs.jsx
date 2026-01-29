import classNames from 'classnames';
import { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === activeTabId })}
            >
              <a
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  setActiveTabId(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(
          tab =>
            tab.id === activeTabId && (
              <div key={tab.id} id={tab.id}>
                {tab.content}
              </div>
            ),
        )}
      </div>
    </>
  );
};
