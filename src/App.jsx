import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const [name, setName] = useState("sriverogalan");

  const users = [
    {
      initialIsFollowing: true,
      userName: "sriverogalan",
      name: "Sergi",
    },
    {
      initialIsFollowing: true,
      userName: "miquelangelamengual",
      name: "Miquel Angel",
    },
    {
      initialIsFollowing: false,
      userName: "pep",
      name: "Pep",
    },
    {
      initialIsFollowing: false,
      userName: "toni",
      name: "Toni",
    },
  ];

  return (
    <section className="App">
      {users.map(({ initialIsFollowing, userName, name }) => {
        return (
          <TwitterFollowCard
            key={userName}
            initialIsFollowing={initialIsFollowing}
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
