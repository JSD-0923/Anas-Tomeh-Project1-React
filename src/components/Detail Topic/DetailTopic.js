
import './DetailTopic.css'
import VerticalSpace from "../../utils/VerticalSpace";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Error from "../../utils/Error/Error";
import LoadingIndicator from "../../utils/LoadingIndicator/LoadingIndicator";
import Button from "../../utils/Button/Button";
import {buttonCustomStyle, secondaryButtonStyle} from "../../utils/Button/ButtonStyles";
const DetailTopic = ({onFavouriteTopics}) => {

    const [topic, setTopic] = useState()
    const [favouriteTopics, setFavouriteTopics] = useState([]);
    const [inFavourite, setInFavourite] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { id } = useParams();

    const fetchTopic = async () => {

        try {
            const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
            let result = await response.json();
            setTopic(result)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    };

    const storedFavouriteTopics = JSON.parse(localStorage.getItem('favouriteTopics')) || [];
    const handelAddToFavourite = () => {

        onFavouriteTopics(topic)
        setInFavourite(!inFavourite)
    }

    // since JS compares objects by ref not by content so to compare it used some to compare content
    const isTopicInFavourites = storedFavouriteTopics.some((storedTopic) => {
        if (topic) {
          return   storedTopic.id === topic.id
        }
    });

    useEffect(() => {
        const storedFavouriteTopics = JSON.parse(localStorage.getItem('favouriteTopics')) || [];
        setFavouriteTopics(storedFavouriteTopics);
        fetchTopic()
    },[])

    return (
        <>
            {loading && <LoadingIndicator message={'Topic is Loading ...'}/>}
            <div>
                {topic &&
                    <div className="details-section-content">
                        <section className="topic-content">
                            <section className="topic-details">
                                <h2 className="topic-title">{topic.category}</h2>
                                <VerticalSpace height={'10px'}/>
                                <h2 className="language-name">{topic.topic}</h2>
                                <VerticalSpace height={'10px'}/>
                                <div className="rating-stars">
                                    <p>★★★★★</p>
                                </div>
                                <VerticalSpace height={'10px'}/>
                                <p className="topic-description">{topic.description}</p>
                            </section>
                            <section className="details-topic-card">
                                <div className="detail-topic-image-container">
                                    <img className="details-topic-image" src={require(`../../assets/Logos/${topic.image}`)} />
                                </div>
                                <div className="details-card-info">
                                    <h2 className={'details-author-name'}>{topic.topic} by <a>{topic.name}</a></h2>
                                    <div className="add-to-favorite-box">
                                        <h2>Interested about this topic?</h2>
                                        <Button
                                        label={!isTopicInFavourites ? 'Add to Favourites ♡ ' : 'Remove From Favourites ♡ '}
                                        onClick={handelAddToFavourite}
                                        style={secondaryButtonStyle}
                                        />
                                        <p>Unlimited Credits</p>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className={'sub-topics-content'}>
                            <h3>{topic.topic} Sub Topics</h3>
                            {topic.subtopics.map((sub, index) => {
                                return (
                                    <ul key={index} className={'sub-topic-text'}>
                                        <li>
                                            <div className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ionicon"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                                        fill="none"
                                                        stroke="green"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="32"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="green"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="32"
                                                        d="M352 176L217.6 336 160 272"
                                                    />
                                                </svg>
                                            </div> {sub}
                                        </li>
                                    </ul>
                                )
                            })}
                        </section>

                    </div>
                }
            </div>
            {error && <Error message={'Something went wrong. Web topics failed to load'}/>}
        </>
    )
}




export default DetailTopic;