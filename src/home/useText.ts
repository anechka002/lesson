import {useState} from "react";

export const useText = (initialText: string = '') => {
  const [text, setText] = useState(initialText);

  const clear = () => {
    setText('');
  }

  const toUpperCase = () => {
    setText(text.toUpperCase());
  }

  const toLowerCase = () => {
    setText(text.toLowerCase());
  }

  return {text, setText, clear, toUpperCase, toLowerCase};
}

