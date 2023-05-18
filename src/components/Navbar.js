import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <Link className="Nav-Link" to={"/"}>Home</Link>
    <Link className="Nav-Link" to={"/favorite"}>Favorites</Link>
  </nav>
  )
}