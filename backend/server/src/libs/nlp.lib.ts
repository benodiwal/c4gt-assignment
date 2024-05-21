import axios from "axios";
import getEnvVar from "env/index";

class Nlp {
    async getSQLQuery(text: string) {
        const response = await axios.post(`${getEnvVar("NLP_SERVICE_SERVER_URL")}/query`, { text });
        return response.data;
    }
}

const nplService = new Nlp();
export default nplService;
