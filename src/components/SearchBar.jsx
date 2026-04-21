import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-wrap">
            <i className="bi bi-search"></i>
            <input
                className="search-input"
                placeholder="Search"
                value={query ?? ''}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
