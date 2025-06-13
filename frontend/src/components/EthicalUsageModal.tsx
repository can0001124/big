import React from 'react';

const EthicalUsageModal = ({ onAccept }: { onAccept: () => void }) => (
  <div style={{
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.7)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 1000
  }}>
    <div style={{ background: '#fff', padding: 40, borderRadius: 10 }}>
      <h2>Etik Kullanım Sözleşmesi</h2>
      <p>
        Bu paneli kullanarak sosyal medya platformlarının kullanım şartlarına ve etik kurallarına uyacağınızı kabul edersiniz.
      </p>
      <button onClick={onAccept}>Kabul Ediyorum</button>
    </div>
  </div>
);

export default EthicalUsageModal;
