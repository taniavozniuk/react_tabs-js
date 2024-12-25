import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(1); // Локальний стан для вибраної вкладки

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is Tab ${selectedTab}`}</h1>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default App;
