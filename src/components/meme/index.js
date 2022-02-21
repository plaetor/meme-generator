import React, {useState} from "react";
import './index.css';
import myMeme from '../../memesData.js';

export default function Meme() {

  /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */ 
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  
  const [allMemeImages, setAllMemeImages] = useState(myMeme)

  function handleClick() {
    const arrayLength = myMeme.data.memes.length;
    const newMeme = myMeme.data.memes[Math.floor(Math.random() * (arrayLength))].url ;
    console.log(newMeme);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newMeme
    }));
  }

  return (
    <section>
      <div className="meme--form">
        <input className="meme--form_input" placeholder="top text" type="text" name="topText"></input>
        <input className="meme--form_input" placeholder="bottom text" type="text" name="bottomText"></input>
        <button onClick={handleClick} className="new_meme">Get new image 🖼</button>
      </div>
      <img src={meme.randomImage} alt="meme" className="meme--image" />
    </section>
  )
}