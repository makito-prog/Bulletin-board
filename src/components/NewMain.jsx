import { Link } from "react-router-dom";
import '../App.css';
import { useState } from "react";

export const NewMain = (props) => {
  const { createThreads } = props;
  const [threadTitle, setThreadTitle] = useState('');

  return (
    <>
      <h3 className="title">スレッド新規作成</h3>
      <input className="new-thread-title" type="text" placeholder="スレッドタイトル" onChange={(e) => setThreadTitle(e.target.value)} />
      <div className="back">
        <Link className="back-link" to="/">Topに戻る</Link>
        <Link className="create-button" to="/">
          <button onClick={() => createThreads(threadTitle)}>作成</button>
        </Link>
      </div>
    </>
  )
}