import React from 'react';
import SearchHistoryPreview from './SearchHistoryPreview';

const searchHistoryList = ({ searchHistory, historyClicked }) => {
    return <div className="search-history-list-container margin_lft_rgt ">
        <div className="search-history-title">Recent Searches</div>
        {searchHistory.slice(0).reverse().map((term, idx) => {
            return <SearchHistoryPreview term={term} historyClicked={historyClicked} key={idx} />
        })}
    </div>
}
export default searchHistoryList
