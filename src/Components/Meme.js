import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        top_text: "",
        bottom_text: "",
        random_image: "https://i.imgflip.com/261o3j.jpg" 
    })
    
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            random_image: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="top_text"
                    value={meme.top_text}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottom_text"
                    value={meme.bottom_text}
                    onChange={handleChange}
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.random_image} className="meme-image" />
                <h2 className="meme-text top">{meme.top_text}</h2>
                <h2 className="meme-text bottom">{meme.bottom_text}</h2>
            </div>
        </main>
    )
}