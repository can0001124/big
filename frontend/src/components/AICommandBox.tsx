import React, { useState } from 'react';
import api from '../api';

const AICommandBox = () => {
  const [command, setCommand] = useState('');
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {
    const res = await api.post('ai/analyze', { command });
    setResult(res.data);
  };

  return (
    <div>
      <textarea value={command} onChange={e => setCommand(e.target.value)} placeholder="AI Komutunu yaz..." />
      <button onClick={analyze}>Analiz Et</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};
export default AICommandBox;
