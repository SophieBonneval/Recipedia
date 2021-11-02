import React, { useEffect } from "react";


function Api() {
    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=chicken&number=20`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div>
    </div>
  )
}

export default Api