import axios from 'axios'


const instance = axios.create({
    baseURL: "https://directus.jangrahul.top/",
    headers: {
        ["Authorization"]: "Bearer ICjts38qSe2wUB6Y2d_jtBo5WVpzRdnL"
    }
});

export default instance;