
import './TopicList.css'
import TopicCard from "../Cards/TopicCard/TopicCard";

const TopicList = (props) => {

    const {topics} = props
    return (
        <div className={'results'}>
            {topics.map(topic => <div className="topic-card-container" key={topic.id}>
                <TopicCard topic={topic}/>
            </div>)}
        </div>
    )

}

export default TopicList;