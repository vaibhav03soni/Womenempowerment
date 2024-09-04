import './UserDetail.css'

function UserDetail() {
    const user=JSON.parse(localStorage.getItem('user'))||{};
      return (
    <div className='user'>
        <h1>User Details</h1>
        <p><strong>Name:</strong>{user.name}</p>
        <p><strong>LastName:</strong>{user.lastname}</p>
    </div>
  )
}

export default UserDetail