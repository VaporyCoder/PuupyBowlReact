import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const { data } = await axios.get(
        `https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`
      );
      const detail = data.data.player;
      setPlayer(detail)
    }

    getPlayer();
  }, [])

  async function handleDelete(){
    const result = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`)
    console.log(result)
  }

  return (
    <>
      <h1>{player && player.name}</h1>
      <h2>{player && player.breed}</h2>
      <h2>{player && player.status}</h2>
      <button onClick={handleDelete}>Delete Player</button>
    </>
  );
};

export default Detail;
