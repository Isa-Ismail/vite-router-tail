import React from 'react'
import { useParams } from 'react-router-dom'
interface Props {}

const About = () => {
    const { id } = useParams()
  return <div className="pt-20">{id}About</div>
}

export default About