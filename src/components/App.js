import React, {   useState, useEffect } from "react";

function App() {
    const[Image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message);
        });
    }, []);
    
    return (
        <div>
            {Image ? <p>Here's a lovely fox for you:<img src={Image} alt={Image} /></p>  :  <p>Its Loading...</p>}
            
        </div>
    )
}

export default App;