import {useState, useEffect} from "react";
import "../../styles/asideBar.css";
import { BsFillHeartFill } from "react-icons/bs";
import { FaComment, FaShare } from "react-icons/fa";
import numeroRandom from "../../utilities/numeroRandom";

let countLikes = numeroRandom(10)
let countComment =numeroRandom(10)
let countShares =numeroRandom(10)


export function AsideBar() {

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
