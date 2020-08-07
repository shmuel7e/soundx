import React, { useState, useEffect } from 'react';
import SoundCloudService from '../services/SoundCloudService.js';
import TrackList from '../cmps/TrackList.jsx';
import Spinner from '../cmps/Spinner.jsx';
import TrackImageGrid from '../cmps/TrackImageGrid.jsx';
import listIMG from '../assets/images/list.svg';
import gridIMG from '../assets/images/grid.svg';
import nextIMG from '../assets/images/next.svg';

const TrackSearch = ({ trackClicked, searchClicked, historyTxt }) => {

    const [state, setState] = useState({
        tracks: [],
        searchTxt: '',
        isLoading: false,
        isResults: true,
        offset: 0,
        isListDisp: true
    })

    useEffect(() => {
        setState({ ...state, isListDisp: getUserDisplaySettings() });
    }, [])

    useEffect(() => {
        setState({ ...state, searchTxt: historyTxt });
        loadTracks(0, historyTxt);
    }, [historyTxt])


    const getUserDisplaySettings = () => {
        return localStorage.getItem('isListDisplay') ? JSON.parse(localStorage.getItem('isListDisplay')) : true;
    }

    const loadTracks = async (offset = state.offset, searchTxt = state.searchTxt) => {
        if (!searchTxt) return;
        setState({ ...state, isLoading: true });

        const trackItems = await SoundCloudService.getTrackItems(searchTxt, offset);
        const { next_href: nextHref, collection: tracks } = trackItems;
        const currOffset = getOffset(nextHref);

        setState({ ...state, tracks, isLoading: false, isResults: !!tracks.length, offset: currOffset });
    }

    const getOffset = (nextHref) => {
        if (!nextHref) return 0;
        let substring = nextHref.split('offset=').pop();
        return parseInt(substring.split('&q')[0]);
    }

    const handleChange = (ev) => {
        let searchTxt = ev.target.value;
        setState({ ...state, searchTxt });
    }

    const nextPage = () => {
        loadTracks();
    }

    const goSearch = (ev) => {
        ev.preventDefault();
        if (!state.searchTxt) return;
        searchClicked(state.searchTxt);
        loadTracks(0);
    }

    const toggleListView = () => {
        localStorage.setItem('isListDisplay', !state.isListDisp);
        setState({ ...state, isListDisp: !state.isListDisp });
    }


    return <div className="track-search-container margin_lft_rgt ">

        <form className="search-container" onSubmit={goSearch}>
            <input type="text" onChange={handleChange}></input>
            <i className="fas fa-search cursor-pointer" onClick={goSearch}></i>
        </form>

        {!state.isLoading ?
            (state.isListDisp ?
                <TrackList tracks={state.tracks} isResults={state.isResults} trackClicked={trackClicked} /> :
                <TrackImageGrid tracks={state.tracks} isResults={state.isResults} trackClicked={trackClicked} />)
            : <Spinner />}

        <div className="track-search-next-icon cursor-pointer" onClick={nextPage}><img src={nextIMG} alt="Next" /></div>
        <div className="track-search-icons-display cursor-pointer" onClick={toggleListView}>{state.isListDisp ? <img src={gridIMG} alt="Grid" /> : <img src={listIMG} alt="List" />}</div>


    </div>
}

export default TrackSearch;