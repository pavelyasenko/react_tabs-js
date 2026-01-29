import classNames from 'classnames';
import { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <>
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
      <div>
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
