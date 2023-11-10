import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api' ,
    params: {
        key: process.env.game_hub_api_key
    }
})