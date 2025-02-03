import React from 'react'
import "./Projects.css"
import { Project } from '../DataProjects/dataProjects'
import { useState } from 'react'

function Projects() {

  const [sortBy, setSortBy] = useState(null);

  const filteredProjects = sortBy
  ? Project.filter((project) => project.sort === sortBy)
  : Project;


  return (
    <div className='projectscontainer'>
      <h2>My Projects</h2>
      <ul className='sortby'>
        <li><button className='sbtn' onClick={() => setSortBy(1)}>1</button></li>
        <li><button className='sbtn' onClick={() => setSortBy(2)}>2</button></li>
        <li><button className='sbtn' onClick={() => setSortBy(3)}>3</button></li>
        <li><button className='sbtn' onClick={() => setSortBy(null)}>All</button></li>
      </ul>
      <div className='prodj'>
        {
          filteredProjects.map(({id, pName, pDescription, pImg}) =>{
            return  (
              <div className='cell' key={id}>
                <img src={pImg} alt="" className='pimg'/>
                <div>{pName}</div>
                <div>{pDescription}</div>
              </div>
       
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Projects
