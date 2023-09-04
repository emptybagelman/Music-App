import React,{useState,useEffect} from 'react'

const RealmCard = ({ realm }) => {

  const [style,setStyle] = useState({})

  const activeStyle = () => {
    if(realm.expired == false){
      const btnStyle = {color:"white",filter:"brightness(1.2)",cursor:"pointer"}
      setStyle(btnStyle)
    }else{
      setStyle({})
    }
  }

  useEffect(() => {
    activeStyle()
  },[])

  return (
    <div className="realm-container">
        <div className="content">
            <h3>{realm.name}</h3>
            <p>{realm.expired ? "EXPIRED" : realm.members + " in game"}</p>
        </div>
        <button style={style}>{realm.expired ? "EXPIRED" : "PLAY"}</button>
    </div>
  )
}

export default RealmCard