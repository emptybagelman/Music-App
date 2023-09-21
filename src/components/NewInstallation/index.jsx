import React,{ useState,useEffect,useRef } from 'react'
import { useInst } from "../../contexts"
import "./style.css"

const NewInstallation = () => {

  const { overlayDisplay, setNewInstToggle, newInstToggle } = useInst()

  // form
  const [instName, setInstName] = useState("")
  const [version,setVersion] = useState("Latest release (1.20.1)")
  const [directory,setDirectory] = useState("")
  const [resolution,setResolution] = useState(["auto"])

  //options toggle
  const [optionsActive, setOptionsActive] = useState(false)
  const [javaExec,setJavaExec] = useState("")
  const [jvmArg,setJvmArg] = useState("")

  const overlay = useRef()

  function handleAnimation(){
    overlayDisplay ? overlay.current.className = "fadein" : overlay.current.className = ""
  }

  function handleInstName(e){
    setInstName(e.target.value)
  }

  function handleVersionChange(e){
    setVersion(e.target.value)
  }

  function handleDirectory(e){
    setDirectory(e.target.value)
  }

  function handleResolution(e){
    setResolution(e.target.value)
  }

  useEffect(() => {
    handleAnimation()
  },[overlayDisplay])

  return (
    <div ref={overlay} id='inst-overlay' style={ overlayDisplay }>
        <div id="top">
            <h1>Create new installation</h1>
            <button onClick={() => setNewInstToggle(!newInstToggle)}></button>
        </div>
        <div id="lower-main">
          <form id='create-new'>
            <img src="./src/assets/jukebox.png" alt="" />
            <label htmlFor="inst-name">NAME</label>
            <input type="text" name='inst-name' id='inst-name' value={instName} placeholder='unnamed installation' onChange={handleInstName}/>

            {/*  */}

            <div id="labels">
              <label htmlFor="version">VERSION</label>  
              <section>SERVER</section>
            </div>
            <select name="version" id="version-select" value={version} onChange={handleVersionChange}>
              <option value="release 1.20.1">release 1.20.1</option>
              <option value="release 1.20">release 1.20</option>
            </select>

            {/*  */}

            <label htmlFor="directory">GAME DIRECTORY</label>
            <div id="directory-flex">
              <input type="text" id='directory-input' value={directory} placeholder='<Use default directory>' onChange={handleDirectory}/>
              <button id="browse">BROWSE</button>
            </div>

            {/*  */}

            <label htmlFor="resolution">RESOLUTION</label>
            <div id="resolution-flex">
              <select name="presets" id="presets" value={resolution[0]} onChange={handleResolution}>
                <option value="auto">auto</option>
                <option value="800x600">800x600</option>
              </select>
            </div>





          </form>
        </div>
    </div>
  )
}

export default NewInstallation