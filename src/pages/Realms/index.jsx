import React, {useState,useEffect} from 'react'
import { RealmCard } from "../../components"
import "./style.css"

const Realms = () => {

  const [realms,setRealms] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  async function getRealms(){
    try {
      const response = await fetch("http://localhost:5000/realms")
      const data = await response.json()

      setRealms(data.realms)
      setLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    getRealms()
  },[])

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

        <h4 id='realmsH4'>Owned</h4>

        {loading ? <p>Loading...</p> : realms.map((realm,index) => {
          return <RealmCard key={index} realm={realm}/>
        })}

      </div>
    </div>
    
  )
}

export default Realms