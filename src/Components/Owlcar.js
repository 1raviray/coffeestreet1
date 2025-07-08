import React from 'react'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import CountUp from 'react-countup';

const Owlcar = () => {
    
  return (
    <div>
    <CountUp start={0} end={1123456} duration={3} separator=","></CountUp>
    <div class="counter"> downloads</div>
        <ReactOwlCarousel className='owl-theme' loop margin={10} nav items={6} autoplayHoverPause={true} autoplaySpeed={1000} autoplayTimeout={1000} autoplay={true}>
        <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
        </ReactOwlCarousel>

    </div>
  )
}

export default Owlcar