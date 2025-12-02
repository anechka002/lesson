import {useToggle} from "./useToggle.ts";

export const LightSwitch = () => {
  const {isOn, toggle} = useToggle(false)

  return (
    <div>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  )
}

export const TogglePage = () => {
  return (
    <div>
      <LightSwitch />
      <VisibilityToggle/>
      <NotificationSwitch/>
    </div>
  )
}

const VisibilityToggle = () => {
  const {isOn, setIsOn} = useToggle(false)

  return (
    <div>
      <h2>Секретное сообщение</h2>
      <h3>{isOn ?  "🎉 Это секретное сообщение!" : ""}</h3>
      <button onClick={() => setIsOn(true)}>Показать</button>
      <button onClick={() => setIsOn(false)}>Скрыть</button>
    </div>
  );
};

const NotificationSwitch = () => {
  const {isOn, toggle, reset, setIsOn} = useToggle(true)
  return (
    <div>
      <h2>Настройки уведомлений</h2>
      <h3>{!isOn ?  "🔔 Уведомления включены" : "🔕 Уведомления выключены"}</h3>
      <button onClick={toggle}>Переключить</button>
      <button onClick={() => setIsOn(false)}>Включить</button>
      <button onClick={reset}>Сбросить по умолчанию</button>
    </div>
  )
}
