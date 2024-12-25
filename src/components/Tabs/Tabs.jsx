export const Tabs = ({ selectedTab, setSelectedTab }) => {
  const handleClick = tabValue => {
    setSelectedTab(tabValue);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li className={selectedTab === 1 ? 'is-active' : ''} data-cy="Tab">
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => {
                handleClick(1);
              }}
            >
              Tab 1
            </a>
          </li>

          <li data-cy="Tab" className={selectedTab === 2 ? 'is-active' : ''}>
            <a
              href="#tab-2"
              data-cy="TabLink"
              onClick={() => {
                handleClick(2);
              }}
            >
              Tab 2
            </a>
          </li>

          <li data-cy="Tab" className={selectedTab === 3 ? 'is-active' : ''}>
            <a
              href="#tab-3"
              data-cy="TabLink"
              onClick={() => {
                handleClick(3);
              }}
            >
              Tab 3
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab === 1 && ' Some text 1'}
        {selectedTab === 2 && ' Some text 2'}
        {selectedTab === 2 && ' Some text 2'}
      </div>
    </div>
  );
};

export default Tabs;
