import SC from 'soundcloud';

SC.initialize({
    client_id: 'ggX0UomnLs0VmW7qZnCzw',
});

export default {
    getTrackItems,
    embedTrack
}

function getTrackItems(search, offset) {
    return SC.get('/tracks', { q: search, limit: 6, offset: offset, linked_partitioning: 1 });
}

function embedTrack(trackURL) {
    return SC.oEmbed(trackURL, { auto_play: true, show_artwork: false, maxwidth: 'auto', maxheight: 100 });
}