import { useEffect, useState } from "react";
import { User, UserArray } from "./types";
import { supabase } from "./supabaseClient";

function App() {
  const [users, setUsers] = useState([] as UserArray);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    console.log(supabase);
    const { data: users, error } = await supabase.from("users").select('*').eq("username", "rhuancf");
    error ? console.log("error: ", error) : setUsers(users as UserArray);
  }

  return (
    <ul>
      {users.map((user:User) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
}

export default App;