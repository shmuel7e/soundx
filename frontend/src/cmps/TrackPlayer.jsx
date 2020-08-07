import React, { useState } from 'react';
import noTrackFound from '../assets/images/noTrackFound.jpg';
import soundx from '../assets/images/soundx.jpg';
import SoundCloudService from '../services/SoundCloudService';
import parse from 'html-react-parser';


const TrackPlayer = ({ currTrack, isVisable }) => {

    const [currEmbeddedTrack, setCurEmbeddedTrack] = useState(null);

    const embedTrack = async () => {
        if (!currTrack) return;
        const embeddedObj = await SoundCloudService.embedTrack(currTrack.permalink_url);
        const embeddedHtml = embeddedObj.html;
        const result = removeVisual(embeddedHtml);
        setCurEmbeddedTrack(parse(result));
    }

    const removeVisual = (embeddedHtml, search = 'visual=true', replace = 'visual=false') => {
        return embeddedHtml.replace(search, replace);
    }


    return <div className="track-cover-container margin_lft_rgt">
        <div onClick={embedTrack} className="track-container flex column justify-center">
            {currTrack ? <img className={isVisable ? 'fadeIn' : 'fadeOut'} src={currTrack.artwork_url ? removeVisual(currTrack.artwork_url, 'large', 't500x500') : noTrackFound} alt="Img" /> :
                <img style={{ cursor: 'initial' }} className={isVisable ? 'fadeIn' : 'fadeOut'} src={soundx} alt="Img" />}
        </div>
        <span className="track-player">{currEmbeddedTrack}</span>
    </div>

}
export default TrackPlayer
