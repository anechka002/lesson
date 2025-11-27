export function Users() {
  const users = [
    {
      id: 1,
      name: "John",
      age: 32,
      email: "john@gmail.com",
      avatar: "https://tinyurl.com/4ez2s7mt",
    },
    {
      id: 2,
      name: "Alice",
      age: 17,
      email: "alice@yahoo.com",
      avatar: "https://tinyurl.com/ynyx9nhu",
    },
    { id: 3, name: "Mike", age: 44, email: "mike@hotmail.com" },
    {
      id: 4,
      name: "Sarah",
      age: 29,
      email: "sarah@gmail.com",
      avatar: "https://tinyurl.com/yyktspmh",
    },
  ]
  return (
    <div style={{ display: "flex", gap: '20px'}}>
      {users.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  )
}

const UserCard = (props) => {
  const defaultAvatar = 'https://placehold.co/128?text=no+photo'

  return (
    <div style = {{width: '200px', display: "flex", gap: '20px', flexDirection: "column", border: '2px solid white', padding: '20px' }}>
      <img
        width="100px"
        src={props.user.avatar || defaultAvatar}
        alt="avatar"
      />
      <span>name: {props.user.name}</span>
      <span>age: {props.user.age < 18 ? "🔞 " + props.user.age : props.user.age}</span>
      <span>email: {props.user.email}</span>
    </div>
  );
};