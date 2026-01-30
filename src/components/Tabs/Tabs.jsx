import classNames from 'classnames';

export const Tabs = ({
  tabsChildElement,
  activeTabIdChildElement,
  setActiveTabIdChildElement,
  onTabSelectedChildElement,
}) => {
  return (
    <>
      <h1 className="title">
        {' '}
        {`Selected tab is ${onTabSelectedChildElement.title}`}
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabsChildElement.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === activeTabIdChildElement,
              })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  setActiveTabIdChildElement(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabsChildElement.map(
          tab =>
            tab.id === activeTabIdChildElement && (
              <div key={tab.id} id={tab.id}>
                {tab.content}
              </div>
            ),
        )}
      </div>
    </>
  );
};
