import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
      <div className="header">
        <h3>掲示板</h3>
        <button className="new-thread-button">{<Link to="/thread/new">スレッドをたてる</Link>}</button>
      </div>
    </>
  )
}