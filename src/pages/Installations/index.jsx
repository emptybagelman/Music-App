import React,{ useState, useEffect, useRef } from 'react'
import { InstallationForm } from "../../components"
import "./style.css"

const Installations = () => {

  const [inputText,setInputText] = useState("")
  const [sortChoice,setSortChoice] = useState("latestplayed")
  const [toggleArr,setToggleArr] = useState(new Array(3).fill(false))

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

  return (
    <div id="inst-main">
      <div id='main-content'>
        <InstallationForm inputText={inputText} handleInput={handleInput} sortChoice={sortChoice} handleSortChange={handleSortChange} toggleArr={toggleArr} updateToggle={updateToggle}/>
        {/* <form id='topform'>
          <div id="search-input">
            <label htmlFor="search">SEARCH</label>
            <input name="search" type="text" placeholder='Installation name' id='searchinput' value={inputText} onChange={handleInput}/>
          </div>
          <div id="sort-input">
            <label htmlFor="sort">SORT BY</label>
            <select name="sort" id="sort-select" value={sortChoice} onChange={handleSortChange}>
              <option value="latestplayed">Latest Played</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div id="versions">
            <label>VERSIONS</label>
            <div id="checkboxes">
              <input type="checkbox" name="releases" id="releases-cb" value="releases" checked={toggleArr[0]} onChange={() => updateToggle(0)} />
              <label htmlFor="releases">Releases</label>
              <input type="checkbox" name="snapshots" id="snapshots-cb" value="snapshots" checked={toggleArr[1]} onChange={() => updateToggle(1)} />
              <label htmlFor="snapshots">Snapshots</label>
              <input type="checkbox" name="modded" id="modded-cb" value="modded" checked={toggleArr[2]} onChange={() => updateToggle(2)} />
              <label htmlFor="modded">Modded</label>
            </div>
          </div>
        </form> */}
        <button id="new-installation">New installation</button>
      </div>
    </div>
  )
}

export default Installations