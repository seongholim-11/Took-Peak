export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { id, cnt } = req.body;

            const response = await fetch(
                `https://www.hrd.go.kr/hrdp/api/apipo/APIPO0102T.do?srchTrprId=${id}&srchTorgId=default&outType=2&srchTrprDegr=${cnt}&authKey=OgGAJP6x3EPDrhHJDsC2QEokrp1JyegK&returnType=JSON&srchTraPattern=N1&srchPart=1&apiRequstPageUrlAdres=/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_2.jsp&apiRequstIp=115.91.70.236`
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
