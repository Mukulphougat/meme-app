import React from "react";
import "./Styles.css"
import Generated from "./Generated";
import memesData from "../memesData";
import salt from "../Images/salty.png";

function GenerateButton() {
    const [memeImage, setImage] = React.useState("")
    function generateMeme(){
        /*let array = memesData.data.memes;
        let randomIndex = Math.floor(Math.random()*array.length);
        setImage(array[randomIndex].url)*/
        let dataDown;
        fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json()).then(data => setImage(data.url));
    }
    function onErrorImage(erroredImage) {
        erroredImage.target.src = salt
    }
    return (
        <div className="generate-button">
            <button onClick={generateMeme} className="btn"><a className="generate-button-text">Generate</a></button>
            <div className="generated">
                <img src={memeImage} className="meme" onError={onErrorImage}/>
            </div>
        </div>
    )
}
export default GenerateButton;