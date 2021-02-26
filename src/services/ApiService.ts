import md5 from "js-md5";
import { ENV } from "../utils/Envs";

const { API_BASE_URL, PRIVATE_KEY, PUBLIC_KEY } = ENV;

export class ApiService {

    private mountUrl(params?: string) {
        const timestamp = Date.now();
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        return `${API_BASE_URL}characters?ts=${timestamp}${params}&orderBy=name&limit=4&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    }

    async geHeros(name: string, offset: number) {
        let params = "";

        if (!!name) {
            params += `&name=${name}`;
        }
        params += `&offset=${offset}`;

        try {
            const url = this.mountUrl(params);
            const response = await fetch(url);
            const responseJson = await response.json()

            if (responseJson.code === 200) {
                const { offset, limit, total, results } = responseJson.data;
                return { offset, limit, total, results, isSuccess: true };
            }
            return { isSuccess: false };
        } catch (error) {
            return { isSuccess: false };
        }

    }
}