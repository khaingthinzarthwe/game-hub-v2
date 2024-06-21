import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dd59fd5b6d90464da62fcf5b6ff97260'
    }
})