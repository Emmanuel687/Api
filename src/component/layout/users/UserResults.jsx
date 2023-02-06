import React from "react";
import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState();
  const[loading,setloading]= useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setloading(false)
  };

  return <div>UserResults</div>;
}

export default UserResults;
