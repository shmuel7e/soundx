import React from 'react';

const SearchHistoryPreview = ({ term, historyClicked }) => {

    const onHistoryClicked = () => {
        historyClicked(term);
    }
    return <div className="history-preview-item cursor-pointer" onClick={onHistoryClicked}>
        {term}
    </div>
}
export default SearchHistoryPreview