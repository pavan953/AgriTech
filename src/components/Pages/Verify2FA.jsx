import { useState } from 'react';
import axios from 'axios';

function Verify2FA() {
  const [code, setCode] = useState('');

  const handleVerify2FA = async () => {
    try {
      await axios.post('/api/verify-2fa', { code });
      alert('2FA verified successfully!');
    } catch (error) {
      console.error('Error verifying 2FA', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Verify Two-Factor Authentication</h1>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter 2FA code"
        className="border px-4 py-2 rounded mb-4 w-full"
      />
      <button
        onClick={handleVerify2FA}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Verify
      </button>
    </div>
  );
}

export default Verify2FA;
