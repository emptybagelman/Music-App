import React,{ useState, useEffect, useRef } from 'react'
import { InstallationForm, InstallInstance } from "../../components"
import { useInst } from "../../contexts"
import "./style.css"
import axios from 'axios'

const Installations = () => {

  const [inputText,setInputText] = useState("")
  const [sortChoice,setSortChoice] = useState("latestplayed")
  const [toggleArr,setToggleArr] = useState(new Array(3).fill(false))
  const [insts,setInsts] = useState([])

  const { newInstToggle, setOverlayDisplay, setNewInstToggle, setOverlayInfoFill } = useInst()

  function updateToggle(pos){
    const updatedState = toggleArr.map((val,index) => index === pos ? !val : val)
    setToggleArr(updatedState)
    handleSubmit()
  }

  function handleInput(e){
    setInputText(e.target.value)
    handleSubmit()
  }

  function handleSortChange(e){
    setSortChoice(e.target.value)
    handleSubmit()
  }

  function handleSubmit(){
    console.log("beans")
  }

  function handleOverlay(){
    newInstToggle ? setOverlayDisplay({display:"block"}) : setOverlayDisplay({display:"none"})
  }

  function emptyOverlayInfo(){
    setOverlayInfoFill({"name":"","version":"Latest release (1.20.1)","directory":"","resolution":"autoxauto","javaexec":"","jvm":""})
  }

  async function getAllInstallations(){
    const resp = await axios.get("http://localhost:5000/installations")
    const data = resp.data.installations
    setInsts(data)
  }

  useEffect(() => {
    handleOverlay()
    getAllInstallations()
  },[newInstToggle])

  return (
    <div id="inst-main">
      <div id='main-content'>
        <InstallationForm inputText={inputText} handleInput={handleInput} sortChoice={sortChoice} handleSortChange={handleSortChange} toggleArr={toggleArr} updateToggle={updateToggle}/>

        <button id="new-installation" onClick={() => {setNewInstToggle(!newInstToggle);emptyOverlayInfo()}}>New installation</button>
        
        <div id="installed">
          {insts && insts.map((i, index) => (
            <InstallInstance index={index} i={i}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Installations