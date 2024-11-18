import { useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { FaStar } from "react-icons/fa";
import "./global.css";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="main-container">
      <Header />
      <Contact />
      <div className="starsc">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={50}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <p className="feedback">thanks for your feedback</p>
    </div>
  );
}

export default App;
