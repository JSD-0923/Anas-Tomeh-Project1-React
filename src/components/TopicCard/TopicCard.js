
import './TopicCard.css'

import VerticalSpace from "../../utils/VerticalSpace";
import {Link} from "react-router-dom";

const TopicCard = ({topics}) => {

    return (
        <div>
            <h2 className="number-of-results">{topics.length > 0 ? `"${topics.length}" Web Topics Found`: 'No Topics Found !!'}</h2>
            <>
                <div className={'results'}>
                        {topics.map(topic => {
                            return (
                                <div key={topic.id} className="topic-card-container">
                                    <Link to={`details/${topic.id}`}>
                                        <div className={'topic-card'}>
                                            <div className="topic-image-container">
                                                <img className={'topic-image'} src={require(`../../assets/Logos/${topic.image}`)} alt={'topic'}/>
                                            </div>
                                            <div className="card-info">
                                                <h2 className="topic-category">{topic.category}</h2>
                                                <p className="topic-name">{topic.topic}</p>
                                                <div className="rating-stars">
                                                    <p>★★★★★</p>
                                                </div>
                                                <footer>
                                                    <p className="author-name">Author: {topic.name}</p>
                                                </footer>
                                            </div>
                                        </div>
                                    </Link>
                                    <VerticalSpace/>
                                </div>
                            )
                        })}
                </div>

            </>

        </div>
    )
}


export default TopicCard;