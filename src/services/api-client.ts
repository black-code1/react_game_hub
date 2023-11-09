import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api' ,
    params: {
        key: process.env.GAME_HUB_API_KEY
    }
})