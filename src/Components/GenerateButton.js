import React from "react";
import "./Styles.css"
import Generated from "./Generated";
import memesData from "../memesData";
import salt from "../Images/salty.png";

function GenerateButton() {

    const [memeImage, setImage] = React.useState("")
    function generateMeme(){
        let axios = require("axios").default;

        /*let array = memesData.data.memes;
        let randomIndex = Math.floor(Math.random()*array.length);
        setImage(array[randomIndex].url)
        let dataDown;
        fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json()).then(data => setImage(data.url));
                 */
        let options = {
            method: 'GET',
            url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
            params: {
                top: 'Top Text',
                bottom: 'Bottom Text',
                meme: 'Condescending-Wonka',
                font_size: '50',
                font: 'Impact'
            },
            headers: {
                'x-rapidapi-host': 'ronreiter-meme-generator.p.rapidapi.com',
                'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
            }
        };
        fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json()).then(data => setImage(data.url));

        axios.request(options).then(function (response) {
            setImage(response.data.url)
        }).catch(function (error) {
            setImage(memeImage);
        });
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