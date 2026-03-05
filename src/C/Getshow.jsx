import { useGet } from "./Useget";


const Getshow = () => {
  const { data } = useGet(`/users`);

  return (
    <div>
      <h1>All Data</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName} {user.lastName}</h3>
        </div>
      ))}
    </div>
  );
};

export default Getshow;