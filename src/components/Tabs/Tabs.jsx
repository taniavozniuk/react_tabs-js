import { useState } from 'react';

export const Tabs = (tabs, selectedTab, setSelectedTab) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li
            className={selectedTab === tabs.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => {
                setSelectedTab(tabs.id);
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
                setSelectedTab(tabs.id);
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
                setSelectedTab(tabs.id);
              }}
            >
              Tab 3
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab === 1 && 'Some text 1'}
        {selectedTab === 2 && 'Some text 2'}
        {selectedTab === 3 && 'Some text 3'}
        {/* {tabs.find(tab => tab.id === selectedTab)?.content} */}
        {/* Some text 1 */}
      </div>
    </div>
  );
};

export default Tabs;
