import {useState} from "react";

export const useToggle = (initialValue: boolean) => {
  const [isOn, setIsOn] = useState(initialValue)
  const toggle = () => {
    setIsOn(!isOn)
  }
  const reset = () => {
    setIsOn(initialValue)
  }
  return {isOn, toggle, setIsOn, reset}
}