import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [connected, setConnected] = useState(false);

  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8888"); 
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected to WebSocket");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "create") {
          const newRoomId = data.payload.roomId;
          setRoomId(newRoomId);
          joinRoom(newRoomId);
          alert("Room created: " + newRoomId);
        } else {
          setMessages((prev) => [...prev, event.data]);
        }
      } catch (e) {
        setMessages((prev) => [...prev, event.data]); 
      }
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
      setConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  const send = (msgObj) => {
    if (socketRef.current && connected) {
      socketRef.current.send(JSON.stringify(msgObj));
    }
  };

  const createRoom = () => {
    send({ type: "create", payload: {} });
  };

  const joinRoom = (id) => {
    send({ type: "join", payload: { roomId: id } });
    setJoined(true);
  };

  const handleJoinClick = () => {
    if (roomId.trim()) {
      joinRoom(roomId);
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      send({ type: "chat", payload: { message: inputMessage } });
      setInputMessage("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React WebSocket Chat</h2>

      {!joined ? (
        <>
          <button onClick={createRoom}>Create Room</button>
          <input
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            style={{ marginLeft: 10 }}
          />
          <button onClick={handleJoinClick} style={{ marginLeft: 10 }}>
            Join Room
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Room:</strong> {roomId}
          </p>
          <div
            style={{
              border: "1px solid #ccc",
              padding: 10,
              height: 200,
              overflowY: "auto",
              marginBottom: 10,
            }}
          >
            {messages.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
          </div>
          <input
            placeholder="Message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={{ marginLeft: 10 }}>
            Send
          </button>
        </>
      )}

      {!connected && <p style={{ color: "red" }}>Disconnected</p>}
    </div>
  );
}

export default App;
