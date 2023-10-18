import { useParams } from 'react-router-dom'

const About = () => {
    const { id } = useParams()
  return <div className="pt-20">{id}About</div>
}

export default About