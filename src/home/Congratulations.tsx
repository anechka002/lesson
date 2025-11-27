export const Congratulations = (props) => {
  const handleClick = () => {
    props.onReset()
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>
        🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉
      </h1>
      <button onClick={handleClick}>Давай сыграем еще раз и покормим другого слона</button>
      <div style={{ fontSize: "200px" }}>😊</div>
    </div>
  );
};