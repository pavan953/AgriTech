// src/components/AiAssistanceButton.jsx
import { Link } from 'react-router-dom';
import ai from '../../assets/businessman.png';

const AiAssistanceButton = () => {
  return (
    <div className="ai-assistance-container">
      <Link to='https://kisan-sevak--chatbot.streamlit.app/' className="hover:text-green-600">
        <img src={ai} alt="AI Assistance" className="ai-image" />
      </Link>
    </div>
  );
};

export default AiAssistanceButton;
