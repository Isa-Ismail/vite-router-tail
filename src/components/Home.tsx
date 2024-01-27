import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="pt-20">
      Home
      <Link to='/about' >
        Home link to
      </Link>
    </div>
  )
}

export default Home