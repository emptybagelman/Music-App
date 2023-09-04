import React from 'react'
import "./style.css"

const Realms = () => {
  return (
    <div id="container">
      <div id="main">
        <img src="./src/assets/realms.png" alt="realms" />

        <div className="lastUpdated">
          <img src="./src/assets/refresh.png" alt="#" />
          <div>
            <p id="up"><strong>Last Updated</strong></p>
            <p id="down"><strong>{} minutes ago</strong></p>
          </div>
        </div>

        <h4>Owned</h4>

        <div className="realm-container">
          <div className="content">
            <h3>*NAME*</h3>
            <p>EXPIRED</p>
          </div>
          <button>EXPIRED</button>
        </div>

      </div>
    </div>
    
  )
}

export default Realms