import React, { useState } from 'react';

function ChatGPTComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prompt);
    try {
        const res = await fetch('http://localhost:3000/api/chatgpt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
          });
          
  
      const data = await res.json();
      setResponse(data.content);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };
  

  return (
    <div>
      <h2>Chat with GPT</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatGPTComponent;
