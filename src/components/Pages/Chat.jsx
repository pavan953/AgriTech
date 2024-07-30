// // ChatComponent.js
// import { useState } from 'react';

// const ChatComponent = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     // Add logic to send message via your chat service (e.g., Firebase)
//     const updatedMessages = [...messages, { text: newMessage, sender: 'buyer' }];
//     setMessages(updatedMessages);
//     setNewMessage('');
//   };

//   return (
//     <div className="chat-box">
//       <div className="messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="new-message">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message"
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
