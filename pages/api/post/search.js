import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { program } = req.body;
            const encodedText = encodeURIComponent(program);

            const response = await fetch(
                `https://www.hrd.go.kr/hrdp/api/apipo/APIPO0101T.do?outType=1&sort=DESC&srchTraArea1=00&srchTraStDt=20230101&pageSize=10&srchTraEndDt=20231231&sortCol=TRNG_BGDE&pageNum=1&authKey=OgGAJP6x3EPDrhHJDsC2QEokrp1JyegK&srchNcs1=20&srchTraProcessNm=${encodedText}&returnType=JSON&srchTraPattern=N1&srchPart=-99&apiRequstPageUrlAdres=/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp&apiRequstIp=115.91.70.236`
            );

            if (response.ok) {
                const data = await response.json();
                console.log("POST Response:", data);

                // Additional parsing to access the necessary data
                const parsedData = JSON.parse(data.returnJSON);
                console.log("Parsed Data:", parsedData);

                res.status(200).json(parsedData);
            } else {
                console.error("Network response was not ok.");
                res.status(response.status).send(
                    "Network response was not ok."
                );
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("An error occurred.");
        }
    } else {
        res.status(405).send("Method not allowed.");
    }
}
