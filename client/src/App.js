import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import PplCard from "./PplCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err, "Fetch Warning"))
      );
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>IDK</h1>
      <Grid container spacing={10}>
        {users.map(user => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
