import React, { useState } from 'react';
function LikeButton() {

   const [likeText, setLikes] = useState("♡");

   return (
      <button id='likeBtn' onClick={() => {
         if(likeText == "♡"){
            setLikes("♥")
         }else{
            setLikes("♡")}}}>
         {likeText}
      </button>
   );
}
export default LikeButton;