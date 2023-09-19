import React,{ useState,useEffect,useRef } from 'react'
import "./style.css"

const Installations = () => {

  const [inputText,setInputText] = useState("")
  const [sortChoice,setSortChoice] = useState("latestplayed")
  const [toggle1,setToggle1] = useState(false)
  const [toggle2,setToggle2] = useState(false)
  const [toggle3,setToggle3] = useState(false)

  function handleInput(e){
    setInputText(e.target.value)
  }

  function handleSortChange(e){
    setSortChoice(e.target.value)
    console.log(sortChoice)
  }

  return (
    <div id='topform'>
      <form>
        <div id="search-input">
          <label htmlFor="search">SEARCH</label>
          <input name="search" type="text" placeholder='Installation name' id='searchinput' value={inputText} onChange={handleInput}/>
        </div>
        <div id="sort-input">
          <label htmlFor="sort">SORT BY</label>
          <select name="sort" id="sort-input" value={sortChoice} onChange={handleSortChange}>
            <option value="latestplayed">Latest Played</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div id="versions">
          <label>VERSIONS</label>
          <label htmlFor="releases">Releases</label>
          <input type="checkbox" name="releases" id="releases-cb" value="releases"/>
          <label htmlFor="snapshots">Snapshots</label>
          <input type="checkbox" name="snapshots" id="snapshots-cb" value="snapshots"/>
          <label htmlFor="modded">Modded</label>
          <input type="checkbox" name="modded" id="modded-cb" value="modded" onChange={} />
        </div>
      </form>
    </div>
  )
}

export default Installations