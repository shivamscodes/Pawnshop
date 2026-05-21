import './AIClient.css';
import { useState, useRef, useEffect } from "react";
import api from '../../api';

function AIClient() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // const chatEndRef = useRef(null);

  const chatBoxRef = useRef(null);

  // Auto scroll to bottom
  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages, loading]);

  useEffect(() => {
  if (chatBoxRef.current) {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }
}, [messages, loading]);



  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/ai/chat", {
        message: input
      });

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong 😢" }
      ]);
    }

    setLoading(false);
  };

  return (
<>   
   <section className="templatemo-container light-gray-bg section-shadow-bottom">

      <div className="container">

        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">AI Assistant 🤖</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        <div className="form-wrapper">

          {/* CHAT AREA */}

          <div className="chat-area" ref={chatBoxRef}>

            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role}`}>
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant">
                AI is typing...
              </div>
            )}

            <div ></div>

          </div>


          {/* INPUT AREA */}

          <div className="chat-input-wrapper">

            <textarea
              className="form-control"
              rows="4"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask anything..."
            />

            <br/>

            <center>
              <button
                style={{width:"160px"}}
                type="button"
                onClick={sendMessage}
                className="btn-blue-gradient"
              >
                Send
              </button>
            </center>

          </div>

        </div>

      </div>

    </section>
</>
  );
}

export default AIClient;







