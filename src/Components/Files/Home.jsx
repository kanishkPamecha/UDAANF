import React from 'react'
import './Home.css';
import a from '../Images/main.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
          <div className="background-Container">

<div style= {{zIndex:"1001"}} className='h2'>UDAAN AEROMODELLING CLUB</div>
<div className='navbar'>

<div style= {{zIndex:"1001"}}className="tab_Group ">
  <div  className="txt  text-wrapper-selected   text-wrapper-3">About US</div>
  <Link   to="/achievements"  className=" txt text-wrapper our-achievments">Our Achievments</Link>
  <Link  to="/PhotoGallery" className=" txt text-wrapper text-wrapper-4">Galllery</Link>
  <Link to="/ContactUs"  className=" txt text-wrapper  text-wrapper-5">Contact US</Link>
</div>
</div>
<div style={{overflow:'hidden'}}>
  
    <img style={{width:'100vw',height:'100vh'}}  src={a} alt =""/>
</div>
<div className='bodyy' style={{display:'flex' , margin:'1%'}}>
  <div className='AboutUs'>
    <p className='AboutGenerall'> About Us </p>
    <p className=" bd to-achieve-our-goal">
      &#34;To achieve our goal of excellence in the field of technology, we are trying our best to provide base
      for those zealous and hardworking students so that they can grow, nurture and explore the opportunities in
      the sky.&#34;Udaan Aeromodelling Club is a one stop destination where you can learn and polish your
      aeromodelling skills. Udaan is among the best aeromodelling clubs in Jaipur. The club has achieved heights
      in the last few years. The mission of the club is to design, create and fly!It is surely a right destination
      if you want to make your career in aeromodelling.

    </p>
   
  </div> 
  <div>
  


</div>

</div>
<div></div>
<div className="amenities-container">
  <div className="_15FoMr4p">
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M11 0l3.4 6.9L22 8l-5.5 5.4 1.3 7.5-6.8-3.5-6.8 3.5 1.3-7.5L0 8l7.6-1.1z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Training Centre</div>
    </div>
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M20.1 9.7c-.1 0-.2 0-.2-.1-1.3-1.2-2.7-2.1-4.2-2.7-1.4-.6-3-.9-4.7-.9s-3.3.3-4.7.9c-1.4.6-2.8 1.5-4.2 2.7-.1.1-.1.1-.2.1s-.5-.3-1-.9c-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1.4-1.4 3.1-2.5 5-3.3C7 3.5 9 3.1 11 3.1c2 0 4 .4 5.9 1.2 1.9.8 3.6 1.9 5 3.3.1 0 .1.1.1.2s-.3.5-.8 1.1c-.6.5-1 .8-1.1.8zm-3 3.1c-.1 0-.2 0-.3-.1-1-.8-2-1.4-2.8-1.8-.9-.4-1.9-.6-3-.6-.6 0-1.3.1-1.9.3-.6.2-1.2.4-1.7.6-.5.2-.9.5-1.3.7-.4.2-.7.4-.9.6l-.3.3c-.1 0-.5-.3-1-.9-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1-1 2.2-1.8 3.6-2.3 1.4-.5 2.9-.8 4.3-.8s2.9.3 4.3.8c1.4.6 2.6 1.3 3.6 2.3.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.6.5-1 .8-1.1.8zM14 15.9s-.2-.1-.4-.3c-.3-.2-.7-.4-1.1-.6-.5-.2-1-.3-1.4-.3-.5 0-1 .1-1.4.3-.5.2-.9.4-1.1.6-.5.2-.6.3-.6.3-.1 0-.5-.3-1-.9-.6-.6-.8-.9-.8-1.1 0-.1 0-.2.1-.3.6-.6 1.3-1 2.2-1.4.9-.3 1.8-.5 2.6-.5.9 0 1.7.2 2.6.5.9.3 1.6.8 2.2 1.4.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.7.6-1 .9-1.2.9zm-1.1 1.2c0 .2-.3.5-.8 1.1-.5.6-.9.8-1 .8-.1 0-.5-.3-1-.8-.5-.6-.8-.9-.8-1.1 0-.2.2-.4.7-.6.5-.2.9-.3 1.2-.3.3 0 .7.1 1.2.3.2.1.5.4.5.6z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Wifi on the premises</div>
    </div>
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M20.1 9.7c-.1 0-.2 0-.2-.1-1.3-1.2-2.7-2.1-4.2-2.7-1.4-.6-3-.9-4.7-.9s-3.3.3-4.7.9c-1.4.6-2.8 1.5-4.2 2.7-.1.1-.1.1-.2.1s-.5-.3-1-.9c-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1.4-1.4 3.1-2.5 5-3.3C7 3.5 9 3.1 11 3.1c2 0 4 .4 5.9 1.2 1.9.8 3.6 1.9 5 3.3.1 0 .1.1.1.2s-.3.5-.8 1.1c-.6.5-1 .8-1.1.8zm-3 3.1c-.1 0-.2 0-.3-.1-1-.8-2-1.4-2.8-1.8-.9-.4-1.9-.6-3-.6-.6 0-1.3.1-1.9.3-.6.2-1.2.4-1.7.6-.5.2-.9.5-1.3.7-.4.2-.7.4-.9.6l-.3.3c-.1 0-.5-.3-1-.9-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1-1 2.2-1.8 3.6-2.3 1.4-.5 2.9-.8 4.3-.8s2.9.3 4.3.8c1.4.6 2.6 1.3 3.6 2.3.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.6.5-1 .8-1.1.8zM14 15.9s-.2-.1-.4-.3c-.3-.2-.7-.4-1.1-.6-.5-.2-1-.3-1.4-.3-.5 0-1 .1-1.4.3-.5.2-.9.4-1.1.6-.5.2-.6.3-.6.3-.1 0-.5-.3-1-.9-.6-.6-.8-.9-.8-1.1 0-.1 0-.2.1-.3.6-.6 1.3-1 2.2-1.4.9-.3 1.8-.5 2.6-.5.9 0 1.7.2 2.6.5.9.3 1.6.8 2.2 1.4.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.7.6-1 .9-1.2.9zm-1.1 1.2c0 .2-.3.5-.8 1.1-.5.6-.9.8-1 .8-.1 0-.5-.3-1-.8-.5-.6-.8-.9-.8-1.1 0-.2.2-.4.7-.6.5-.2.9-.3 1.2-.3.3 0 .7.1 1.2.3.2.1.5.4.5.6z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Wifi on the premises</div>
    </div>    
    </div>
    </div>
    <div className="amenities-container">
    <div className="_15FoMr4p">
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M17.9 5.9l-3.6 3.6v10.1c0 .4-.1.7-.4 1-.3.3-.6.4-1 .4s-.7-.1-1-.4c-.3-.3-.4-.6-.4-1v-4.7h-.8v4.7c0 .4-.1.7-.4 1-.3.3-.6.4-1 .4s-.7-.1-1-.4c-.3-.3-.4-.6-.4-1V9.5L4.5 5.9c-.3-.3-.4-.5-.4-.9 0-.3.1-.6.3-.8.3-.2.6-.3.9-.3.3 0 .6.1.8.3L8.9 7h4.5l2.8-2.8c.2-.2.5-.3.8-.3.3 0 .6.1.8.3.2.2.3.5.3.8.2.4 0 .6-.2.9zm-4.8-4c.5.5.8 1.2.8 1.9a2.732 2.732 0 0 1-2.7 2.7c-.7 0-1.4-.2-2-.7-.5-.5-.8-1.2-.8-1.9a2.732 2.732 0 0 1 2.7-2.7c.7 0 1.5.2 2 .7z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Good for children</div>
    </div>
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M20.1 9.7c-.1 0-.2 0-.2-.1-1.3-1.2-2.7-2.1-4.2-2.7-1.4-.6-3-.9-4.7-.9s-3.3.3-4.7.9c-1.4.6-2.8 1.5-4.2 2.7-.1.1-.1.1-.2.1s-.5-.3-1-.9c-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1.4-1.4 3.1-2.5 5-3.3C7 3.5 9 3.1 11 3.1c2 0 4 .4 5.9 1.2 1.9.8 3.6 1.9 5 3.3.1 0 .1.1.1.2s-.3.5-.8 1.1c-.6.5-1 .8-1.1.8zm-3 3.1c-.1 0-.2 0-.3-.1-1-.8-2-1.4-2.8-1.8-.9-.4-1.9-.6-3-.6-.6 0-1.3.1-1.9.3-.6.2-1.2.4-1.7.6-.5.2-.9.5-1.3.7-.4.2-.7.4-.9.6l-.3.3c-.1 0-.5-.3-1-.9-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1-1 2.2-1.8 3.6-2.3 1.4-.5 2.9-.8 4.3-.8s2.9.3 4.3.8c1.4.6 2.6 1.3 3.6 2.3.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.6.5-1 .8-1.1.8zM14 15.9s-.2-.1-.4-.3c-.3-.2-.7-.4-1.1-.6-.5-.2-1-.3-1.4-.3-.5 0-1 .1-1.4.3-.5.2-.9.4-1.1.6-.5.2-.6.3-.6.3-.1 0-.5-.3-1-.9-.6-.6-.8-.9-.8-1.1 0-.1 0-.2.1-.3.6-.6 1.3-1 2.2-1.4.9-.3 1.8-.5 2.6-.5.9 0 1.7.2 2.6.5.9.3 1.6.8 2.2 1.4.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.7.6-1 .9-1.2.9zm-1.1 1.2c0 .2-.3.5-.8 1.1-.5.6-.9.8-1 .8-.1 0-.5-.3-1-.8-.5-.6-.8-.9-.8-1.1 0-.2.2-.4.7-.6.5-.2.9-.3 1.2-.3.3 0 .7.1 1.2.3.2.1.5.4.5.6z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Good for children</div>
    </div>
    <div id="amen-tags" className="_3rf5CDRC">
      <div className="_1akdhHzA _2jB1Yrq3">
        <i className="_3a4bHz9Q">
          <svg version="1.1" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
            <path fill="currentColor" d="M20.1 9.7c-.1 0-.2 0-.2-.1-1.3-1.2-2.7-2.1-4.2-2.7-1.4-.6-3-.9-4.7-.9s-3.3.3-4.7.9c-1.4.6-2.8 1.5-4.2 2.7-.1.1-.1.1-.2.1s-.5-.3-1-.9c-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1.4-1.4 3.1-2.5 5-3.3C7 3.5 9 3.1 11 3.1c2 0 4 .4 5.9 1.2 1.9.8 3.6 1.9 5 3.3.1 0 .1.1.1.2s-.3.5-.8 1.1c-.6.5-1 .8-1.1.8zm-3 3.1c-.1 0-.2 0-.3-.1-1-.8-2-1.4-2.8-1.8-.9-.4-1.9-.6-3-.6-.6 0-1.3.1-1.9.3-.6.2-1.2.4-1.7.6-.5.2-.9.5-1.3.7-.4.2-.7.4-.9.6l-.3.3c-.1 0-.5-.3-1-.9-.6-.5-.9-.9-.9-1 0-.1 0-.2.1-.3 1-1 2.2-1.8 3.6-2.3 1.4-.5 2.9-.8 4.3-.8s2.9.3 4.3.8c1.4.6 2.6 1.3 3.6 2.3.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.6.5-1 .8-1.1.8zM14 15.9s-.2-.1-.4-.3c-.3-.2-.7-.4-1.1-.6-.5-.2-1-.3-1.4-.3-.5 0-1 .1-1.4.3-.5.2-.9.4-1.1.6-.5.2-.6.3-.6.3-.1 0-.5-.3-1-.9-.6-.6-.8-.9-.8-1.1 0-.1 0-.2.1-.3.6-.6 1.3-1 2.2-1.4.9-.3 1.8-.5 2.6-.5.9 0 1.7.2 2.6.5.9.3 1.6.8 2.2 1.4.1.1.1.2.1.3 0 .1-.3.5-.8 1.1-.7.6-1 .9-1.2.9zm-1.1 1.2c0 .2-.3.5-.8 1.1-.5.6-.9.8-1 .8-.1 0-.5-.3-1-.8-.5-.6-.8-.9-.8-1.1 0-.2.2-.4.7-.6.5-.2.9-.3 1.2-.3.3 0 .7.1 1.2.3.2.1.5.4.5.6z" />
          </svg>
        </i>
      </div>
      <div className="_1ezDtZXb">Wifi on the premises</div>
    </div>
  </div>
</div>

</div >
    </div>
  )
}

export default Home
