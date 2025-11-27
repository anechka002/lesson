import {useState} from "react";
import {Counter} from "./Counter.tsx";
import {Elephant} from "./Elephant.tsx";

export const Game = () => {
  const [activePage, setActivePage] = useState<'counter' | 'elephant'>('counter')

  const handleFinish = () => {
    setActivePage('elephant')
  }

  const handleReset = () => {
    setActivePage('counter')
  }

  return (
    <div>
      {activePage === 'counter' && <Counter onFinish={handleFinish} />}
      {activePage === 'elephant' && <Elephant onReset={handleReset}/>}
    </div>
  );
};

