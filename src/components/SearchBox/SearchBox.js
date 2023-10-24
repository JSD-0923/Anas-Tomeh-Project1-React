
import './SearchBox.css'
import {useState} from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";

const SearchBox = ({onSearchQuery, onSortTopics, onFilterTopics, filteredTopics, topics}) => {

    const [searchInputValue, setSearchIInputValue] = useState('');

    const filterOptions = topics.map(option => option.category).filter((category, index, self) => self.indexOf(category) === index);
    const debounceInputs = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const debouncedSearch = debounceInputs((query) => {
        onSearchQuery(query);
    }, 300);


    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchIInputValue(inputValue);

        debouncedSearch(inputValue);
    };
    const handleSortByChange = (e) => {
        onSortTopics(e.target.value);
    };

    const handleFilterByChange = (e) => {
        onFilterTopics(e.target.value);
    };

    return (
        <section className="search-box" aria-label="search box">
            <form id={'search-box'}>
                <SearchIcon color={'var(--body-text-var)'}/>
                <label className="searchInput" htmlFor="searchInput"></label>
                <input
                    placeholder="Search the website..."
                    aria-label="search input"
                    type={'text'}
                    value={searchInputValue}
                    onChange={handleInputChange}
                />
                <div className="search-dropdown-list">
                    <label htmlFor="sort-by">Sort by:</label>
                    <select id="sort-by" onChange={handleSortByChange}>
                        <option value="default">Default</option>
                        <option value="topic-title">Topic Title</option>
                        <option value="author-name">Author Name</option>
                    </select>
                </div>
                <div className="search-dropdown-list">
                    <label htmlFor="filter-by">Filter by:</label>
                    <select id="filter-by" onChange={handleFilterByChange}>
                        <option value="default">Default</option>
                        {filterOptions.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
            </form>
        </section>
    )
}


export default SearchBox;