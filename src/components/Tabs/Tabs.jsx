import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === activeTabId,
              })}
            >
              <a
                data-cy="TabLink"
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
