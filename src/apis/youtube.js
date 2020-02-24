import axios from 'axios';

const KEY = 'AIzaSyDGCkyRIzlfSJu-Uf8tSUAtFRfH2pC__90';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

})




