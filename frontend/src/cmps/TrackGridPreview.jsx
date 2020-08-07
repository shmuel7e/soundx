import React from 'react';
import noTrackFound from '../assets/images/noTrackFound.jpg';

const TrackPreview = ({ track, trackClicked }) => {

    const onSelectTrack = () => {
        trackClicked(track);
    }

    return <div onClick={onSelectTrack}><img src={track.artwork_url ? track.artwork_url : noTrackFound} alt="img" /></div>

}
export default TrackPreview