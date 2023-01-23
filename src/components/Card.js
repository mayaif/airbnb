

// import coverImg from "../images/katie-zaferes.png";






function Card(props) {
  
  let badgeText
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
 
    
  return(
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.coverImg}`} alt="pic1" className="card--image" />
      <div className="card--stats">
        <img src="./images/star.png" alt="rating" className="card--star"/>
        <span>{props.stats.rating}</span>
        <span className="gray"> ({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--titles">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
      <hr />
    </div>
  )
}

export default Card;