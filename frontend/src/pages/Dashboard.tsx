import React from 'react';
import AccountList from '../components/AccountList';
import AICommandBox from '../components/AICommandBox';
import Logs from '../components/Logs';

const Dashboard = () => (
  <div>
    <h2>Yönetim Paneli</h2>
    <AccountList />
    <AICommandBox />
    <Logs />
  </div>
);

export default Dashboard;
