import { createClient } from "contentful";

const client = createClient({
    space: "ozo29r26xjd6", // Replace with your Space ID
    accessToken: "Ixw0ItQ-wniKPehQdDx0IXCC4jyDY2G_gkPV3cij5Eg" // Replace with your API Token
});

export default client;