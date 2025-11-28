import {useState} from "react";

export function Counter(props: {onFinish: () => void}) {
  const [value, setValue] = useState(1);

  const handleClick = () => {
    setValue(value + 1)
    if (value + 1 === 5 && props.onFinish) {
      props.onFinish()
    }
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h3>Нажми на кнопку 4 раза, чтобы увидеть слона</h3>
      <button onClick={handleClick}>+{value}</button>
    </div>
  )
}