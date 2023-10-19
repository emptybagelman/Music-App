import React,{ useState,useEffect,useRef } from 'react'
import { useInst } from "../../contexts"
import "./style.css"
import axios from "axios"

const NewInstallation = () => {

  const { overlayDisplay, setOverlayDisplay, setNewInstToggle, newInstToggle, overlayInfoFill } = useInst()

  const defaultJVMArg = "-Xmx2G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M"

  // form
  const [instName, setInstName] = useState("")
  const [version,setVersion] = useState("Latest release (1.20.1)")
  const [directory,setDirectory] = useState("")
  const [resolution,setResolution] = useState("autoxauto")

  //options toggle
  const [optionsActive, setOptionsActive] = useState(false)
  const [javaExec,setJavaExec] = useState("")
  const [jvmArg,setJvmArg] = useState(defaultJVMArg)

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

  function handlePreset(e){
    console.log(e.target.value);
      const dim = e.target.value.split("x")
      setResolution([dim[0],dim[1]])
  }

  function handleResolution(e, idx){
    console.log(resolution);
    idx == 0 ? setResolution([e.target.value,resolution.split("x")[1]]) : setResolution([resolution.split("x")[0],e.target.value])
  }

  function handleJavaExecInput(e){
    setJavaExec(e.target.value)
  }

  function handleJVM(e){
    setJvmArg(e.target.value)
  }

  function closeOverlay(){
    setOverlayDisplay({display:"none"})
    setNewInstToggle(false)
  }

  async function sendInstallationForm(e){
    e.preventDefault()
    const formData = new FormData()

    formData.append("name",instName)
    formData.append("version",version)

    if(!directory){
      formData.append("directory","C:/Users")
    }else{
      formData.append("directory",directory)
    }
    formData.append("resolution",resolution[0]+"x"+resolution[1])

    if(javaExec){
      formData.append("javaexec",javaExec)
    }
    if(jvmArg){
      formData.append("jvm",jvmArg)
    }

    try {
      const newInst = await axios.post("http://localhost:5000/installations",formData)
      .then(resp => {
        console.log("response: ",resp.data);
      })
      .catch(err => {
        console.error("Error: ",err)
      })

    } catch (error) {
      console.log("line85 error",error);
    }
  }

  function fillFields(){
    setInstName(overlayInfoFill.name)
    setVersion(overlayInfoFill.version)
    setDirectory(overlayInfoFill.directory)
    setResolution(overlayInfoFill.resolution)
    setJavaExec(overlayInfoFill.javaexec)
    setJvmArg(overlayInfoFill.jvm)
  }

  function emptyFields(){
    setInstName("")
    setVersion("Latest release (1.20.1)")
    setDirectory("")
    setResolution("autoxauto")
    setJavaExec("")
    setJvmArg("")
  }

  useEffect(() => {
    handleAnimation()
    if(overlayDisplay){
      fillFields()
    }

  },[overlayDisplay])

  return (
    <div ref={overlay} id='inst-overlay' style={ overlayDisplay }>
        <div id="top">
            <h1>Create new installation</h1>
            <button onClick={() => setNewInstToggle(!newInstToggle)}></button>
        </div>
        <div id="lower-main">
          <form id='create-new' onSubmit={(e) => {sendInstallationForm(e);setOverlayDisplay({display:"none"})}}>
            <img src="./src/assets/jukebox.png" alt="" />

            {/* NAME */}

            <label htmlFor="inst-name">NAME</label>
            <input type="text" name='inst-name' id='inst-name' value={instName} placeholder='unnamed installation' onChange={handleInstName} autoComplete='off'/>

            {/* VERSIONS */}

            <div id="labels">
              <label htmlFor="version">VERSION</label>  
              <label>SERVER</label>
            </div>
            <select name="version" id="version-select" value={version} onChange={handleVersionChange}>
              <option value="release 1.20.1">release 1.20.1</option>
              <option value="release 1.20">release 1.20</option>
            </select>

            {/* DIRECTORY */}

            <label htmlFor="directory">GAME DIRECTORY</label>
            <div id="directory-flex">
              <input type="text" id='directory-input' value={directory} placeholder='<Use default directory>' onChange={handleDirectory} autoComplete='off'/>
              {directory.length > 0 ? <button onClick={() => setDirectory("")}>X</button> : ""}
              <button className="browse">BROWSE</button>
            </div>

            {/* RESOLUTION */}

            <label htmlFor="resolution">RESOLUTION</label>
            <div id="resolution-flex">
              <select name="presets" id="presets" value={resolution} onChange={handlePreset}>
                <option value="autoxauto">auto</option>
                <option value="800x600">800x600</option>
                <option value="1024x768">1024x768</option>
              </select>
              <input type="text" id='res-width' placeholder='<auto>' value={resolution.split("x")[0]} onChange={(e) => handleResolution(e,0)}  autoComplete='off'/>
              <p>X</p>
              <input type="text" id='res-height' placeholder='<auto>' value={resolution.split("x")[1]} onChange={(e) => handleResolution(e,1)}  autoComplete='off'/>
            </div>

            {/* MORE OPTIONS */}

            <p id='more-options' onClick={() => setOptionsActive(!optionsActive)}>{optionsActive ? "LESS OPTIONS" : "MORE OPTIONS"}</p>

            {/* JAVA EXEC */}

            {
              optionsActive
              ?
              <>
              <label htmlFor="javaexec">JAVA EXECUTABLE</label>
              <div id="exec-flex">
                <input type="text" name='javaexec' id='javaexec' value={javaExec} placeholder='<Use bundled Java runtime>' onChange={handleJavaExecInput} autoComplete='off'/>
                {javaExec.length > 0 ? <button id={"execbtn"} onClick={() => setJavaExec("")}>X</button> : ""}
  
                <button className="browse">BROWSE</button>
              </div>
              </>
              : <></>
            }

            {/* JVM ARGUMENTS */}

            {
              optionsActive
              ? <>
                  <label htmlFor="jvm">JVM ARGUMENTS</label>
                  <div id="jvm-flex">
                    <input type="text" name='jvm' id='jvm' value={jvmArg} onChange={handleJVM} autoComplete='off'/>
                    {jvmArg.length > 0 && jvmArg !== defaultJVMArg ? <button id={"jvmbtn"} onClick={() => setJvmArg(defaultJVMArg)}>RESET</button> : "" }
                  </div>
                </>
              : <></>
            }

            <div id="btns">
              <button className='fbtn btn' id="cancel" onClick={closeOverlay} >Cancel</button>
              <button type='submit' className='fbtn btn' id="create">Create</button>
            </div>

          </form>

        </div>


    </div>
  )
}

export default NewInstallation