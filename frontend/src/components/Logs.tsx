import React, { useEffect, useState } from 'react';
import api from '../api';

const Logs = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    api.get('log/').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h3>İşlem Logları</h3>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.command} - {log.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
