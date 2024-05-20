import axios from "axios";

class Nlp {
    async getSQLQuery(text: string) {
        const response = await axios.post('http://localhost:5000/query', { text });
        return response.data;
    }
}

const nplService = new Nlp();
export default nplService;
