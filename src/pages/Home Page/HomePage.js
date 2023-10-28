
import './HomePage.css'
import {useEffect, useState} from "react";
import SearchInput from "../../utils/SearchInput/SearchInput";
import VerticalSpace from "../../utils/VerticalSpace";
import LoadingIndicator from "../../utils/LoadingIndicator/LoadingIndicator";
import Error from "../../utils/Error/Error";
import TopicList from "../../components/TopicList/TopicList";
import useApi from "../../Hooks/useApi";

const HomePage = () => {

    const [topics, setTopics] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('default');
    const [filterBy, setFilterBy] = useState('default');
    const [filteredTopics, setFilteredTopics] = useState([])

    const { data, isLoading, isError } = useApi(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchQuery}`)

    useEffect(()=>{
        setTopics(data)
        setFilteredTopics(data)
    }, [data])
    const handleSearchQuery = (searchInputValue) => {
        setSearchQuery(searchInputValue);
    };

    const handelSortTopics = (sortBy) => {
        setSortBy(sortBy)
    }

    const sortingTopics = () => {
        let sortedTopics = [...filteredTopics];

        switch (sortBy) {
            case 'default':
                sortedTopics.sort((a, b) => a.id - b.id);
                break;
            case 'topic-title':
                sortedTopics.sort((a, b) => a.topic.localeCompare(b.topic));
                break;
            case 'author-name':
                sortedTopics.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        setFilteredTopics(sortedTopics);
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
        sortingTopics()
    },[sortBy])

    useEffect(()=>{
        filteringTopics()
    }, [filterBy])

    return (

        <div className="page-container">
        <div className={'home-page-container'}>
            <SearchInput
                topics={topics?topics:[]}
                filteredTopics={filteredTopics}
                onSearchQuery={handleSearchQuery}
                onSortTopics={handelSortTopics}
                onFilterTopics={handelFilterTopics}
            />
            <VerticalSpace />
            {isLoading && <LoadingIndicator message={'Topics are Loading ...'}/>}
            {isError && <Error message={'Something went wrong. Web topics failed to load'}/>}
            {topics && !isLoading && <h2 className="number-of-results">{topics.length > 0 ? `"${topics.length}" Web Topics Found`: 'No Topics Found !!'}</h2>}
            {topics && topics.length > 0
                && !isError
                && <TopicList topics={filteredTopics}
                />
            }
        </div>
        </div>
    )

}


export default HomePage;