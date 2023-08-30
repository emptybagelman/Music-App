import React from 'react'
import LikeButton from '../LikeButton'


const SongItem = ({song,index}) => {
    return (
        <li>
            <div className="idxname">
                <p>{index+1}</p>
                <p>{song.title}</p>
            </div>
            <div>
                <p>{song.plays}</p>
                <LikeButton />
                <p>{song.length}</p>
            </div>
        </li>
  )
}

export default SongItem