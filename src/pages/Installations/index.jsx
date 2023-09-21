import React,{ useState, useEffect, useRef } from 'react'
import { InstallationForm, NewInstallation } from "../../components"
import { useInst } from "../../contexts"
import "./style.css"

const Installations = () => {

  const [inputText,setInputText] = useState("")
  const [sortChoice,setSortChoice] = useState("latestplayed")
  const [toggleArr,setToggleArr] = useState(new Array(3).fill(false))

  const { newInstToggle, setOverlayDisplay, setNewInstToggle } = useInst()

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

  useEffect(() => {
    handleOverlay()
  },[newInstToggle])

  return (
    <div id="inst-main">
      <div id='main-content'>
        <InstallationForm inputText={inputText} handleInput={handleInput} sortChoice={sortChoice} handleSortChange={handleSortChange} toggleArr={toggleArr} updateToggle={updateToggle}/>

        <button id="new-installation" onClick={() => setNewInstToggle(!newInstToggle)}>New installation</button>
      </div>
    </div>
  )
}

export default Installations