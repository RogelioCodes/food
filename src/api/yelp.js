import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer 11uuU9QRp6k258BEazjIjvAeGbNRkukduD_uE04GqDtry_tgZWLxkd0iE4DpLfyMiViv1n-vr7NCTRQ54qhd7eCWaGgGC3d4IIJki4qVpENU2tnCOCzk5IRlv8mKXXYx'
    }
});

