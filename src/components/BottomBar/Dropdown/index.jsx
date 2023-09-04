import React from 'react'
import "../style.css"

const Dropdown = (props) => {
  console.log(props)
  return (
    <select name="selectAlbum" id="selectAlbum">
        <option value="alpha" onChange={(e) => console.log(props)}>Volume Alpha</option>
        <option value="beta" onChange={(e) => props.handleChange(e.target)}>Volume Beta</option>
    </select>
  )
}

export default Dropdown