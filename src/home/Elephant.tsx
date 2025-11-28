import {useState} from "react";
import {Congratulations} from "./Congratulations.tsx";
import {GameOver} from "./GameOver.tsx";

export function Elephant(props: {onReset: () => void}) {
  const [weight, setWeight] = useState(100)

  const handleFeedHealthyFood = () => {
    setWeight(prev => prev + 20)
  }
  const handleFeedJunkFood = () => {
    setWeight(prev => prev - 20)
  }

  if(weight >= 200) return <Congratulations onReset={props.onReset}/>
  if(weight <= 20) return <GameOver onReset={props.onReset}/>

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Покорми слона</h1>
      <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
      <br />
      <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
      <div style={{fontSize: `${weight}px`}}>🐘</div>
    </div>
  )
}