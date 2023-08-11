async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3"></div>
      <div className="card">
        <div className="card-header text-center">
          <img src={user.avatar} style={{ borderRadius: "50%" }}></img>
        </div>
        <div className="card-body text-center">
          {/* {JSON.stringify(user)} */}
          <div>
            <h3>
              ID:{user.id} - Name: {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
