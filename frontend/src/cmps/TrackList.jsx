import React from 'react';
import TrackPreview from '../cmps/TrackPreview';

const TrackList = ({ tracks, isResults, trackClicked }) => {
    if (!isResults) return <div className="track-list-container"><div className="track-item">No result found :(</div></div>;
    return <div className="track-list-container">
        {tracks.map(track => {
            return <TrackPreview track={track} key={track.id} trackClicked={trackClicked} />
        })}
    </div>

}
export default TrackList