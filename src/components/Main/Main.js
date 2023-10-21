
import './Main.css'
import SearchBox from "../SearchBox/SearchBox";
import TopicCard from "../TopicCard/TopicCard";
import VerticalSpace from "../../utils/VerticalSpace";
import {useEffect, useState} from "react";
import LoadingIndicator from "../../utils/LoadingIndicator/LoadingIndicator";
import Error from "../../utils/Error/Error";
const Main = () => {

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
        <div className={'main.center-content'}>
            <SearchBox
                topics={topics}
                filteredTopics={filteredTopics}
                onSearchQuery={handleSearchQuery}
                onSortTopics={handelSortTopics}
                onFilterTopics={handelFilterTopics}
            />
            <VerticalSpace />
            {loading && <LoadingIndicator message={'Topics are Loading ...'}/>}
            {error && <Error message={'Something went wrong. Web topics failed to load'}/>}
            {topics.length > 0
                && !error
                && <TopicCard topics={filteredTopics}
                />}
        </div>
    )
}

export default Main;