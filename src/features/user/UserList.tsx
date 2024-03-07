import { Users } from "./userSlice"

interface UserListProps {
  users: Users[];
};


const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList