
import './FavouriteTopicCard.css'
const FavouriteTopicCard = ({favouriteTopics}) => {

    return (
         favouriteTopics.map(topic => {
             return (
                 <section key={topic.id} className="favorite-topic-card">
                     <div className="favorite-topic-card-image-container">
                         <img className={'favourite-topic-image'} src={require(`../../../assets/Logos/${topic.image}`)} alt={'topic'}/>
                     </div>
                     <div className="favorite-topic-card-body">
                         <h3>{topic.topic}</h3>
                         <div className="rating-stars">
                             <p>★★★★★</p>
                         </div>
                     </div>
                 </section>
             )
         })
    )
}

export default FavouriteTopicCard;