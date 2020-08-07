import React, { useState, useEffect } from 'react';
import TrackSearch from '../cmps/TrackSearch';
import TrackPlayer from '../cmps/TrackPlayer';
import SearchHistoryList from '../cmps/SearchHistoryList';



const Home = () => {

  const [currTrack, setCurrTrack] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => { return JSON.parse(localStorage.getItem('searchHistory')) || [] });
  const [isVisable, setVisibility] = useState(true);
  const [historyTxt, setHistoryTxt] = useState(null);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory])

  const trackClicked = (track) => {
    setVisibility(false);
    setTimeout(() => {
      setCurrTrack(track);
      setVisibility(true);
    }, 350);
  }

  const searchClicked = (searchInput) => {
    if (searchHistory.length === 5) searchHistory.shift();
    setSearchHistory([...searchHistory, searchInput]);
  }

  const historyClicked = (searchInput) => {
    setHistoryTxt(searchInput);
  }

  return <div className="home-container flex justify-center align-center">
    <TrackSearch trackClicked={trackClicked} searchClicked={searchClicked} historyTxt={historyTxt} />
    <TrackPlayer currTrack={currTrack} isVisable={isVisable} />
    <SearchHistoryList searchHistory={searchHistory} historyClicked={historyClicked} />
  </div>
}

export default Home;
