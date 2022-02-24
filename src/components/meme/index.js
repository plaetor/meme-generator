import React, {useState, useEffect} from "react";
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
  
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {

    const {name, value} = event.target

    setMeme(prevMeme => {
      return {
      ...prevMeme,
      [name]: value
      }
    })
  }

  function handleClick() {
    const arrayLength = allMemes.length;
    const newMeme = allMemes[Math.floor(Math.random() * (arrayLength))].url ;
    console.log(newMeme);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newMeme
    }));
  }

  return (
    <section>
      <div className="meme--form">
        <input 
          className="meme--form_input" 
          placeholder="top text" 
          type="text" 
          name="topText" 
          value={meme.topText}
          onChange={handleChange}  
          />
        <input 
          className="meme--form_input" 
          placeholder="bottom text" 
          type="text" 
          name="bottomText" 
          value={meme.bottomText}
          onChange={handleChange}
          />
        <button onClick={handleClick} className="new_meme">Get new image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      
    </section>
  )
}