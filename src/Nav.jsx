import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Players">Players</Link>
      <Link to="/Create">Create a player</Link>
    </nav>
  );
};

export default Nav;
