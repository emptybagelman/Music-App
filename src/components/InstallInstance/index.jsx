import React, { useState } from 'react'
import "./style.css"
import { useInst } from "../../contexts"


const InstallInstance = ({index,i}) => {

  const [dropdown,setDropdown] = useState(false)

  const { newInstToggle, setNewInstToggle, setOverlayInfoFill } = useInst()

  return (
    <div key={index} className='instances'>
        <div className="leftside">
            <img src="./src/assets/grass_icon.jpg" alt="img" />
            <div className="titles">
                <h3>{i.name}</h3>
                <p>{i.version}</p>
            </div>
        </div>
        <div className="rightside">
            <button>Play</button>
            <p>{"[ ]"}</p>
            <p onClick={() => setDropdown(!dropdown)}>{"..."}</p>
            {dropdown && 
            <div className="dropdown-edit">
              <div id="edit" onClick={() => {setNewInstToggle(!newInstToggle);setOverlayInfoFill(i);}}>Edit</div>
              <div id="duplicate">Duplicate</div>
              <div id="delete">Delete</div>
            </div>
            }
        </div>  
    </div>
  )
}

export default InstallInstance