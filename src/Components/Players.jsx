import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    async function getAllPlayers() {
      const { data } = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players"
      );
      const players = data.data.players;
      setAllPlayers(players);
    }

    getAllPlayers();
  }, []);

  return (
    <>
      <h2>Player List</h2>
      {allPlayers.map((player) => {
        return <div key={player.id}><Link to={`/Players/${player.id}`}>{player.name}</Link></div>;
      })}
    </>
  );
};

export default Players;
