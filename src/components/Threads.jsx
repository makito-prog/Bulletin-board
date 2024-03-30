import { Header } from "./Header"
import { Main } from "./Main"

export const Threads = (props) =>{
  const { threads, getThreads } = props;
  return (
    <>
      <Header />
      <Main threads={threads} getThreads={getThreads} />
    </>
  )
}