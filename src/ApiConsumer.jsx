import React, { useState } from 'react';

function ApiConsumer() {
  const [response, setResponse] = useState(null);

  // Function to make a POST request to the API
  const postData = async () => {
    try {
      const data = {
        data: ["M", "1", "334", "4", "B"]
      };
      const response = await fetch('https://your-api-url/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to make a GET request to the API
  const getData = async () => {
    try {
      const response = await fetch('https://your-api-url/bfhl');
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>API Consumer</h2>
      <button onClick={postData}>Send POST Request</button>
      <button onClick={getData}>Send GET Request</button>
      {response && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiConsumer;