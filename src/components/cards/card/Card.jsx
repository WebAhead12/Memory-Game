import React from 'react';
import './style.css';
// import image from '../images/0.jpg';
const path = require('path')


function Card(props){
    let mypath=path.join(__dirname,'..','images')
    console.log(mypath);
    // const [imgUrl, setImgUrl] = React.useState('0.jpg')
    return (
        <div className='card'>
            <img className='cardCover' src={mypath+'/0.jpg'} alt='cover'/>
        </div>
    );
}

export default Card;