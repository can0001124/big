import { useState } from 'react';
export const useNotification = () => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('info');
  const notify = (msg, t = 'info') => {
    setMessage(msg);
    setType(t);
    setTimeout(() => setMessage(null), 4000);
  };
  const NotificationBar = () =>
    message ? (
      <div style={{ position: 'fixed', top: 10, right: 10, background: type === 'success' ? 'green' : 'red', color: 'white', padding: 10 }}>
        {message}
      </div>
    ) : null;
  return { notify, NotificationBar };
};
