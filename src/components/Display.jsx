import React from 'react'
import Column1 from './Column1'

const Display = () => {
  return (
    <div>
      <ul style={{marginTop: "85px"}}>
        <li className="d-flex" style={{margin:"0px -5px"}}>
            <Column1 />
        </li>
      </ul>
    </div>
  )
}

export default Display
