import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState();
  const [loading, setloading] = useState(true);
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);

    const data = await response.json();
    setUsers(data);
    setloading(false);
  };

  if(!loading){
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user)=>(<UserItem key={user.id}  user={user}/>))}
        </div>
      );

  }else{
    return <Spinner></Spinner>
  }

}

export default UserResults;
