import { useEffect } from "react";

export const Main = (props) => {
  const { threads, getThreads } = props;

  

  useEffect(() => {
    getThreads();
  }, []); 
 
  return (
    <>
      <p className="title">新着スレッド</p>
      <ul>
        {threads.map((thread) => (
          <li className="threads-list" key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </>
  );
};