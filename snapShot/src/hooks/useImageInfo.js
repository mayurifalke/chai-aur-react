import { useState, useEffect } from "react";

function useImageInfo(InputData) {
    const [data, setData] = useState([]);
    const page = 2;

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=jwHiztSEwxGkBGbY6ShQ3Eq-XCT4cMwjoYlimVxgtF8`)
            .then((res) => res.json())
            .then((res) => {
                // Check if the response contains the 'results' array
                if (res.results) {
                    setData(res.results); // Set only the 'results' array, which contains image data
                } else {
                    console.error("No results found in the API response.");
                }
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, [InputData]);

    return data;
}

export default useImageInfo;
