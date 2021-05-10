import React, { useState } from "react";
import './App.css';
import Img1 from './assets/images/numbers/1.png';
import Img2 from './assets/images/numbers/2.png';
import Img3 from './assets/images/numbers/3.png';
import Img4 from './assets/images/numbers/4.png';
import Img5 from './assets/images/numbers/5.png';
import Img6 from './assets/images/numbers/6.png';
import Img7 from './assets/images/numbers/7.png';
import Img8 from './assets/images/numbers/8.png';
import Img9 from './assets/images/numbers/9.png';

function App() {
  const [value, setValue] = useState(1);
  const [activeNo, setActiveNo] = useState(1);

  const handleChange = (value) => {
    setValue(value);
    if (value.length > 1 && (value % 10 !== 0)) {
      setActiveNo(0)
      return
    }else{
      let firstDigit = parseInt(value.toString()[0]);
      setActiveNo(firstDigit)
    }
    
  }
  return (
    <div className="App">
      <h2>Enter Number</h2>
      <input type="number" value={value} onChange={e => handleChange(e.target.value)} max="9999" min="1" />
      {
        activeNo > 0 ?
        <div>
          <div className="image_box">
            <img
              className={
                value.length > 3 ? "rotate" :
                  value.length > 2 ? "rotateX" :
                    value.length > 1 ? "rotateY" :
                      null
              }
              src={`/images/${activeNo}.png`} />
          </div>
          <button><a href={`/images/${activeNo}.png`} download>Download</a></button>
        </div> :
        <div> <h3>No result found</h3></div>
      }
    </div>
  );
}

export default App;
