import { useState } from 'react'
import LikeButton from './LikeButton'
// import '../assets/leftBar.css'

export default function BottomBar() {

    const openSpotifyLink = () => {
        window.open("https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7?si=HjA2jT2DQCqL46pFm4VLJg","_blank")
    }

    return (
        <div id='bottomcontainer'>
            <div className="releaseSection">
                <div className="dropDown">
                    <p>Latest Release</p>
                </div>
                <div className="play">
                    <button onClick={openSpotifyLink}>PLAY</button>
                </div>
                <div className="username">
                    <p>emptybagelman</p>
                </div>
            </div>
            <div className="songContainer">
                <ul className="songList">
                    <li id='songHeader'>
                        <p>Title</p>
                        <div>
                            <p>Plays</p>
                            <p></p>
                            <p>Length</p>
                        </div>
                    </li>
                    <li>
                        <p>Key</p>
                        <div>
                            <p>59,041,326</p>
                            <LikeButton />
                            <p>1:05</p>
                        </div>
                    </li>
                    <li>
                        <p>Door</p>
                        <div>
                            <p>25,069,453</p>   
                            <LikeButton />
                            <p>1:51</p>
                        </div>
                    </li>
                    <li>
                        <p>Subwoofer Lullaby</p>
                        <div>
                            <p>81,001,484</p>
                            <LikeButton />
                            <p>3:28</p>
                        </div>
                    </li>
                    <li>
                        <p>Death</p>
                        <div>
                            <p>14,822,064</p>
                            <LikeButton />
                            <p>0:41</p>
                        </div>
                    </li>
                    <li>
                        <p>Living Mice</p>
                        <div>
                            <p>40,270,199</p>
                            <LikeButton />
                            <p>2:57</p>
                        </div>
                    </li>
                    <li>
                        <p>Moog City</p>
                        <div>
                            <p>36,665,523</p>
                            <LikeButton />
                            <p>2:40</p>
                        </div>
                    </li>
                    <li>
                        <p>Haggstrom</p>
                        <div>
                            <p>42,575,393</p>
                            <LikeButton />
                            <p>3:24</p>
                        </div>
                    </li>
                    <li>
                        <p>Minecraft</p>
                        <div>
                            <p>88,978,653</p>
                            <LikeButton />
                            <p>4:14</p>
                        </div>
                    </li>
                    <li>
                        <p>Oxygène</p>
                        <div>
                            <p>23,170,730</p>
                            <LikeButton />
                            <p>1:05</p>
                        </div>
                    </li>
                    <li>
                        <p>Équinox</p>
                        <div>
                            <p>23,814,632</p>
                            <LikeButton />
                            <p>1:54</p>
                        </div>
                    </li>
                    <li>
                        <p>Mice On Venus</p>
                        <div>
                            <p>56,242,269</p>
                            <LikeButton />
                            <p>4:41</p>
                        </div>
                    </li>
                    <li>
                        <p>Dry Hands</p>
                        <div>
                            <p>43,416,120</p>
                            <LikeButton />
                            <p>1:08</p>
                        </div>
                    </li>
                    <li>
                        <p>Wet Hands</p>
                        <div>
                            <p>69,351,795</p>
                            <LikeButton />
                            <p>1:30</p>
                        </div>
                    </li>
                    <li>
                        <p>Clark</p>
                        <div>
                            <p>30,247,864</p>
                            <LikeButton />
                            <p>3:11</p>
                        </div>
                    </li>
                    <li>
                        <p>Chris</p>
                        <div>
                            <p>20,180,770</p>
                            <LikeButton />
                            <p>1:27</p>
                        </div>
                    </li>
                    <li>
                        <p>Thirteen</p>
                        <div>
                            <p>11,902,256</p>
                            <LikeButton />
                            <p>2:56</p>
                        </div>
                    </li>
                    <li>
                        <p>Excuse</p>
                        <div>
                            <p>20,816,189</p>
                            <LikeButton />
                            <p>2:04</p>
                        </div>
                    </li>
                    <li>
                        <p>Sweden</p>
                        <div>
                            <p>136,307,722</p>
                            <LikeButton />
                            <p>3:35</p>
                        </div>
                    </li>
                    <li>
                        <p>Cat</p>
                        <div>
                            <p>27,793,406</p>
                            <LikeButton />
                            <p>3:06</p>
                        </div>
                    </li>
                    <li>
                        <p>Dog</p>
                        <div>
                            <p>17,322,567</p>
                            <LikeButton />
                            <p>2:25</p>
                        </div>
                    </li>
                    <li>
                        <p>Danny</p>
                        <div>
                            <p>27,857,841</p>
                            <LikeButton />
                            <p>4:14</p>
                        </div>
                    </li>
                    <li>
                        <p>Beginning</p>
                        <div>
                            <p>23,275,659</p>
                            <LikeButton />
                            <p>1:42</p>
                        </div>
                    </li>
                    <li>
                        <p>Droopy Like Ricochet</p>
                        <div>
                            <p>14,258,655</p>
                            <LikeButton />
                            <p>1:36</p>
                        </div>
                    </li>
                    <li>
                        <p>Droopy Likes Your Face</p>
                        <div>
                            <p>16,261,735</p>
                            <LikeButton />
                            <p>1:56</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}