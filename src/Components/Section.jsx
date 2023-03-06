import React from "react";

function Section(props) {
  const { users } = props;

  return (
    <table className="wrapper">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Section;
