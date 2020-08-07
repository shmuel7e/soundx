import React from 'react';
import TrackGridPreview from './TrackGridPreview.jsx';
import noResultImg from '../assets/images/noresult.webp';

const TrackImageGrid = ({ tracks, isResults, trackClicked }) => {
    if (!isResults) return <div className="grid-container flex justify-center align-center"><img className="no-result-img" src={noResultImg} alt="No Results =(" /></div>
    return <div className="grid-container flex justify-center align-center">
        {tracks.map(track => {
            return <TrackGridPreview track={track} key={track.id} trackClicked={trackClicked} />
        })}
    </div>

}
export default TrackImageGrid