import { useEffect, useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState([]);

  const API = "https://nekos.best/api/v2/neko";

  const catApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setCat(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    catApi();
  }, []);

  return (
    <div>
      {cat.map((catData) => (
        <div key={catData.id}>
          {/* <img src={catData.url} alt="cat" width={"200px"} height={"200px"} /> */}
          <h1>{catData.artist_name}</h1>
          <div>{catData.artist_href}</div>
        </div>
      ))}
    </div>
  );
};

export default Cat;
