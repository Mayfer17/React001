import { useState } from "react";
import './App.css'; 

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const reset = () => {
    setLevel(0);
  };

  const imageSrc =
    level > 150
      ? "m2.jpg"
      : level > 100
      ? "m.jpg"
      : level > 0 
      ? "smallmoodang.jpg"
      : "smallmoodang.jpg";


  const imageHeight = Math.min(300 + level * 2, 600); 

  return (
    <div className="game-container">
      <h1 className="game-title"> Level {level}  ต้าวหมูเด้ง</h1>
      <img src={imageSrc} alt="หมูเด้ง" className="main-image" style={{ height: imageHeight }} />
      <br />

      <div className="button-container">
        <button onClick={() => feed(5)} className="feed-button" aria-label="Feed with watermelon">
          <img src="watermelon.jpg" alt="แตงโม" className="feed-image" />
          <figcaption>+5 Watermelon</figcaption>
        </button>
        <button onClick={() => feed(10)} className="feed-button" aria-label="Feed with pumpkin">
          <img src="puff.jpg" alt="ฟักทอง" className="feed-image" />
          <figcaption>+10 Pumpkin</figcaption>
        </button>
        <button onClick={() => feed(20)} className="feed-button" aria-label="Feed with grass">
          <img src="yaaa.jpg" alt="หญ้า" className="feed-image" />
          <figcaption>+20 Grass</figcaption>
        </button>
      </div>

      <br />
      <button onClick={reset} className="reset-button" aria-label="Reset">
        Reset 
      </button>
    </div>
  );
}

