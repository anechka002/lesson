import {useEffect, useState} from "react";

export const CounterPage = () => {
  return (
    <div>
      <CounterX />
      <CounterWithoutAutoReset />
    </div>
  )
}

function CounterWithoutAutoReset() {
  const {value, increment, decrement, reset, changeStep} = useCounter(0, 1, 0)

  const handleIncClick = () => {
    increment()
  }
  const handleDecClick = () => {
    decrement()
  }
  const handleResetClick = () => {
    reset()
  }

  return (
    <>
      <h1>{value}</h1>
      <h3>🔒 Без автосброса</h3>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={handleIncClick}>Увеличить</button>
        <button onClick={handleDecClick}>Уменьшить</button>
        <button onClick={handleResetClick}>Сбросить</button>
        <button onClick={changeStep}>Установить шаг 5</button>
      </div>
    </>
  )
}
function CounterX() {
  const {value, increment, decrement, reset, changeStep} = useCounter(0, 1, 3)

  const handleIncClick = () => {
    increment()
  }
  const handleDecClick = () => {
    decrement()
  }
  const handleResetClick = () => {
    reset()
  }

  return (
    <>
      <h1>{value}</h1>
      <h3>⏰ Автосброс через 3 сек</h3>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={handleIncClick}>Увеличить</button>
        <button onClick={handleDecClick}>Уменьшить</button>
        <button onClick={handleResetClick}>Сбросить</button>
        <button onClick={changeStep}>Установить шаг 5</button>
      </div>
    </>
  )
}

const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime: number = 0) => {
  const [value, setValue] = useState(startValue);
  const [step, setStep] = useState(startStep)

  useEffect(() => {
    if(autoResetTime > 0) {
      const timerId = setTimeout(() => {
        setValue(startValue)
      }, autoResetTime * 1000)
      return () => clearTimeout(timerId)
    }
  }, [autoResetTime, startValue, value])

  const increment = () => {
    setValue(value + step);
  }
  const decrement = () => {
    setValue(value - step);
  }
  const reset = () => {
    setValue(startValue);
  }
  const changeStep = () => {
    alert('шаг изменился на 5 ')
    setStep(5)
  }

  return {value, increment, decrement, reset, changeStep};
}