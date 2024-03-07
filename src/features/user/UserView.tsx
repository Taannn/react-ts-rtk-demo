import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { fetchUsers } from './userSlice'
import { setLoading } from './loadingSlice'
import UserList from './UserList'
import AnotherUserList from './AnotherUserList'
import { anotherFetchUsers } from './anotherUserSlice'

const UserView = () => {
  // const user = useSelector((state) => state.user)
  // const dispatch = useDispatch()
  const user = useAppSelector((state) => state.user)
  const loading = useAppSelector((state) => state.loading.isLoading)
  const anotherUsers = useAppSelector((state) => state.anotherUser)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(anotherFetchUsers())
    console.log(user);
    return () => {
      dispatch(setLoading(false))
    }
  }, [dispatch])

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <div>Loading...</div>}
      {!loading && user.error ?<div>Error: {user.error}</div> : null }
      {!loading && user.users.length ? (
        <div>
          <UserList users={user.users} />
          <AnotherUserList anotherUsers={anotherUsers.users} />
        </div>
      ) : null}
    </div>
  )
}

export default UserView