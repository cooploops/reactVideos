import axios from 'axios';

const KEY = 'AIzaSyA0Q4EEj5nKhsq4nrR_V0OUYNiZWnpsJZM';

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: KEY
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

