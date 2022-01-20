const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.is_active.toString()}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>is active</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <UserItem user={user} key={user.id}/>)}
            </tbody>

        </table>
    )
}

export default UsersList