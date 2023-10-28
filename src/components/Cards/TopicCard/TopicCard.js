
import './TopicCard.css'

import VerticalSpace from "../../../utils/VerticalSpace";
import {Link} from "react-router-dom";
import RatingBar from "../../RatingBar/RatingBar";

const TopicCard = ({topic}) => {

    return (
       <>
               <Link to={`details/${topic.id}`}>
                   <div className={'topic-card'}>
                       <div className="topic-image-container">
                           <img className={'topic-image'} src={require(`../../../assets/Logos/${topic.image}`)} alt={'topic'}/>
                       </div>
                       <div className="card-info">
                           <h2 className="topic-category">{topic.category}</h2>
                           <p className="topic-name">{topic.topic}</p>
                           <div className="rating-stars">
                               <RatingBar rating={topic.rate}/>
                           </div>
                           <footer>
                               <p className="author-name">Author: {topic.name}</p>
                           </footer>
                       </div>
                   </div>
               </Link>
               <VerticalSpace/>
       </>
    )
}


export default TopicCard;