import React from 'react';

const TrackPreview = ({ track, trackClicked }) => {

    const onSelectTrack = () => {
        trackClicked(track);
    }

    return <div className="track-item cursor-pointer" onClick={onSelectTrack}>{track.title}</div>



}
export default TrackPreview