import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [content, setContent] = useState("");
  const [docId, setDocId] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const urlDocId = window.location.pathname.replace("/", "");

    if (urlDocId) {
      setDocId(urlDocId);
      socket.emit("join-document", urlDocId);
      loadDocument(urlDocId);
    } else {
      createDocument();
    }
  }, []);

  const createDocument = async () => {
    try {
      const res = await axios.post("http://localhost:5000/documents");
      const newDocId = res.data._id;

      window.history.replaceState(null, "", `/${newDocId}`);
      setDocId(newDocId);
      socket.emit("join-document", newDocId);
    } catch (err) {
      console.error("Error creating document:", err);
    }
  };

  const loadDocument = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/documents/${id}`);
      setContent(res.data.content || "");
    } catch (err) {
      console.error("Error loading document:", err);
    }
  };

  const handleChange = (value) => {
    setContent(value);
    socket.emit("send-changes", { docId, content: value });
  };

  useEffect(() => {
    socket.on("receive-changes", (data) => {
      setContent(data);
    });

    return () => socket.off("receive-changes");
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="editor-container">
      <div className="header">
        <div>
          <h2 className="title">📝 Real-Time Collaborative Editor</h2>
          {docId && <p className="doc-id">Document ID: {docId}</p>}
        </div>

        <button className="share-btn" onClick={copyLink}>
          {copied ? "Copied ✅" : "Share"}
        </button>
      </div>

      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
}

export default App;