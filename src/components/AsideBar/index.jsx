import {useState, useEffect} from "react";
import "../../styles/asideBar.css";
import { BsFillHeartFill } from "react-icons/bs";
import { FaComment, FaShare } from "react-icons/fa";
import numeroRandom from "../../utilities/numeroRandom";

export function AsideBar({infoVideo}) {
  let video = infoVideo
  let countLikes =  video.stats.likes
  let countComment = video.stats.comments
  let countShares = video.stats.shares

  const [like, setLike] = useState(false)
  const likeOnClick = ()=>{
    setLike(prev=>!prev)
    !like ? countLikes+=1 : countLikes-=1
  }
  return (
    <>
      <nav>
        <ul className="icons-container">
          <li>
            <img src={video.author.avatar} alt="" className="avatar-user"/>
            <div>+</div>
          </li>
          <li>
            <BsFillHeartFill onClick={likeOnClick} className={like && 'me-gusta'}/>
            <span>{countLikes}</span>
          </li>
          <li>
            <FaComment />
            <span>{countComment}</span>
          </li>
          <li>
            <FaShare />
            <span>{countShares}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
