import { useEffect, useState } from "react";

const Extra = () => {
  const [catImage, setCatImage] = useState("");  

  const API = "https://cataas.com/cat";  

  const fetchCatImage = () => {
    fetch(API)
      .then((res) => {
       
        setCatImage(res.url); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);  
      });
  };

  useEffect(() => {
    fetchCatImage();  
  }, []);

  return (
    <>
      <div>
        {catImage ? (
          <img src={catImage} alt="Random Cat" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Extra;