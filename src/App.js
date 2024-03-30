import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import { Threads } from "./components/Threads";
import { NewThreads } from "./components/NewThreads";
import { useState } from "react";



export const App = () => {
  const [threads, setThreads] = useState([]);
  const getThreads = async () => {
    const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: 'GET'
    });
    const movies = await response.json();
    
    setThreads(movies);
  }

  const createThreads = async (threadTitle) => {
    try {
      const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: threadTitle }) 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newThread = await response.json(); // 新しいスレッドのデータを取得
      setThreads(prevThreads => [...prevThreads, newThread]); // 新しいスレッドを既存のスレッドリストに追加
    } catch (error) {
      console.error('エラー:', error);
    }
  };
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Threads threads={threads} getThreads={getThreads} />} />
          <Route path="/thread/new" element={<NewThreads setThreads={setThreads} threads={threads} createThreads={createThreads} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
