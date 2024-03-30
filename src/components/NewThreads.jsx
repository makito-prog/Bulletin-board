import { Header } from "./Header";
import { NewMain } from "./NewMain";

export const NewThreads = (props) => {
  const { setThreads, threads, createThreads } = props;

  return (
    <>
      <Header />
      <NewMain setThreads={setThreads} threads={threads} createThreads={createThreads} />
    </>
  )
}