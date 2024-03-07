import { KopiiUsers } from "./anotherUserSlice";

interface AnotherUserListProps {
  anotherUsers: KopiiUsers[];
};


const AnotherUserList: React.FC<AnotherUserListProps> = ({ anotherUsers }) => {
  return (
    <div>
      <h2>Kopii Products</h2>
      <ul>
        {anotherUsers.map((user) => (
          <li key={user.product_id}>{user.product_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AnotherUserList