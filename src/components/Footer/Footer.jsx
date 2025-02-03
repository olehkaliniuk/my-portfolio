import React from 'react'
import "./Footer.css"

import GitImg from "../../img/git.png"
import LinkImg from "../../img/linkedin.png"

function Footer() {
  return (
    <div className='footercontainer'>
      <div className='ft'>
      <div className='git'>GitHub</div>
      <img src={GitImg} alt="" height={'40px'} />
      </div>
    </div>
  )
}

export default Footer
