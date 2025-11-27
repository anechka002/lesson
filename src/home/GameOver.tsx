export const GameOver = (props) => {
  const handleClick = () => {
    props.onReset()
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>
        У твоего слоника заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий раз корми слона правильной пищей, чтобы слоник был здоров
      </h1>
      <button onClick={handleClick}>Но не расстраивайся. Давай сыграем еще раз</button>
      <div style={{ fontSize: "200px" }}>🥲</div>
    </div>
  );
};