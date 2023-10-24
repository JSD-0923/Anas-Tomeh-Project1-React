
import './HomePage.css'
import {useEffect, useState} from "react";
import SearchInput from "../../utils/SearchInput/SearchInput";
import VerticalSpace from "../../utils/VerticalSpace";
import LoadingIndicator from "../../utils/LoadingIndicator/LoadingIndicator";
import Error from "../../utils/Error/Error";
import TopicCard from "../../components/Cards/TopicCard/TopicCard";
import TopicList from "../../components/TopicList/TopicList";

const HomePage = () => {

    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('default');
    const [filterBy, setFilterBy] = useState('default');
    const [filteredTopics, setFilteredTopics] = useState([])

    const handleSearchQuery = (searchInputValue) => {
        setSearchQuery(searchInputValue);
    };
    const fetchTopics = async () => {
        try {
            const response = await fetch(
                `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchQuery}`);
            let result = await response.json();
            setTopics(result)
            setFilteredTopics(result)

            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    };

    const handelSortTopics = (sortBy) => {
        setSortBy(sortBy)
    }

    const sortingTopics = () => {

        let sortedTopics = [...filteredTopics]
        if (sortBy === 'default') {
            sortedTopics.sort((a, b) => a.id - b.id);
        }
        else if (sortBy === "topic-title") {
            sortedTopics.sort((a, b) => a.topic.localeCompare(b.topic));
        }
        else if (sortBy === "author-name") {
            sortedTopics.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredTopics(sortedTopics)
    }

    const handelFilterTopics = (filterBy) => {
        setFilterBy(filterBy)
    }

    const filteringTopics = () => {
        const filteredTopics = filterBy === 'default'
            ? topics
            : topics.filter(topic => topic.category === filterBy);
        setFilteredTopics(filteredTopics)
    }

    useEffect(() => {
        fetchTopics()
    }, [searchQuery])

    useEffect(() => {
        sortingTopics()
    },[sortBy])

    useEffect(()=>{
        filteringTopics()
    }, [filterBy])

    return (
        <div className="page-container">
        <div className={'home-page-container'}>
            <SearchInput
                topics={topics}
                filteredTopics={filteredTopics}
                onSearchQuery={handleSearchQuery}
                onSortTopics={handelSortTopics}
                onFilterTopics={handelFilterTopics}
            />
            <VerticalSpace />
            {loading && <LoadingIndicator message={'Topics are Loading ...'}/>}
            {error && <Error message={'Something went wrong. Web topics failed to load'}/>}
            {!loading && <h2 className="number-of-results">{topics.length > 0 ? `"${topics.length}" Web Topics Found`: 'No Topics Found !!'}</h2>}
            {topics.length > 0
                && !error
                && <TopicList topics={filteredTopics}
                />
            }
        </div>
        </div>
    )

}


export default HomePage;