import React from 'react'

const InstallationForm = ({ inputText, handleInput, sortChoice, handleSortChange, toggleArr, updateToggle }) => {

    
  return (
    <form id='topform'>
        <div id="search-input">
            <label htmlFor="search">SEARCH</label>
            <input name="search" type="text" placeholder='Installation name' id='searchinput' value={inputText} onChange={handleInput} autoComplete='off'/>
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
    </form>
  )
}

export default InstallationForm