import { useState } from 'react';
import axios from 'axios';

function Enable2FA() {
  const [qrCode, setQrCode] = useState('');

  const handleGenerate2FA = async () => {
    try {
      const response = await axios.post('/api/generate-2fa');
      setQrCode(response.data.qrCodeUrl);
    } catch (error) {
      console.error('Error generating 2FA', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Enable Two-Factor Authentication</h1>
      <button
        onClick={handleGenerate2FA}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate QR Code
      </button>
      {qrCode && (
        <div className="mt-4">
          <img src={qrCode} alt="QR Code" />
        </div>
      )}
    </div>
  );
}

export default Enable2FA;
