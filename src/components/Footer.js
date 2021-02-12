import React,{useState} from "react"

function Footer() {
    const [showMore,setshowMore]=useState(false);
    const linkName=showMore?'Show less':'Show more';
    return (
      <div>
        <button className="button" onClick={()=>{setshowMore(!showMore)}}><h2>{linkName}</h2></button>
        {showMore}
      </div>
    );
}

export default Footer
