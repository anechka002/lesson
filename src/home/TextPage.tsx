import {useText} from "./useText.ts";

export const TextPage = () => {
  return (
    <div>
      <TitleEditor />
      <GreetingCard />
    </div>
  )
}

const TitleEditor = () => {
  const { text, clear, toLowerCase, toUpperCase, setText } = useText('IT-Kamasutra');
  return (
    <div>
      <h2>{text || "Пусто"}</h2>
      <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
      <button onClick={toLowerCase}>нижний регистр</button>
      <button onClick={() => setText('IT-Incubator')}>Изменить на 'Новый заголовок</button>
      <button onClick={clear}>Очистить</button>
    </div>
  )
}

export const GreetingCard = () => {
  const { text, clear, setText, toLowerCase, toUpperCase } = useText('Привет!');

  return (
    <div>
      <h2>💬 {text || "..."}</h2>
      <button onClick={toUpperCase}>ГРОМКО</button>
      <button onClick={toLowerCase}>тихо</button>
      <button onClick={() => setText('Добро пожаловать!')}>Сказать 'Добро пожаловать!'</button>
      <button onClick={clear}>Молчать</button>
    </div>
  )
}