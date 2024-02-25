import React from 'react';
import { useState } from 'react';

const HideShow = () => {
    
    const [tog , setTog] = useState(false);
    const setToogle = ()  => {
        setTog(!tog)
    }
  return (
    <div>
      <button onClick={setToogle}>{tog ? "HideInformation" : "showInformation"}</button>
      {tog && <p>
To toggle the visibility of the data variable when the button is clicked, you can use the setTog function provided by the useState hook to update the state of tog and then conditionally render the data variable based on the value of tog. Here's how you can do it:</p>}
    </div>
  )
}

export default HideShow
