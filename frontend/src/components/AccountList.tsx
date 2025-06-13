import React, { useEffect, useState } from 'react';
import api from '../api';

const AccountList = () => {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    api.get('account/').then(res => setAccounts(res.data));
  }, []);

  return (
    <div>
      <h3>Hesaplar</h3>
      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>{acc.platform} - {acc.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
