import axios from 'axios';
const apiBaseURL = 'https://harshadpatil.com/wp-backend/wp-json/wp/v2';
        // apiCoursesURL = 'https://harshadpatil.com/wp-backend/wp-json/wc/w3'

export const FetchCategory = url => {
    return axios.get(`${apiBaseURL}/${url}`);
}

export const FetchData = url => {
    return axios.get(`${process.env.REACT_APP_API_ROOT}/${url}`);
}