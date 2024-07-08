import React from 'react'
import{  BsLinkedin} from "react-icons/bs"
import { FaGithub } from 'react-icons/fa6'

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <a href="https://linkedin.com/in/emmanuel-patrick-519255126" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/emmanuelpatrick14" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
        
    </div>
  )
}

export default SocialMedia
