import React from 'react';
import './style.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/hero-images', false, /\.(png|jpe?g|svg)$/));
console.log(`images:`, images)


//above is temp solution to determine if the function importAll is working. 
//need to remember how to use relative path. Getting node modules error. 
//will then need to create a func that renders the array of images. 
const Portfolio = () => {
  return (
    /*use a loop to iterate through an array of images from the assets 
    folder to have a simple one liner to handle all the html elements.
    */
    <div className="body-div">Images coming soon</div>
    
    
  );
};

export default Portfolio;
