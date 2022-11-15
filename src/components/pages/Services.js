import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Services() {

  return(
    <> 
    {/* <h1 className='services'></h1> */}
    <h1 className="bye">ABOUT US</h1>
    <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/images/raft.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/images/img-9.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

<p className='container '> Adventure Travel finds the best adventure companies and stories for you to constantly remain equipped and inspired to travel the world. We are the voice of travel businesses committed to long-term, sustainable growth of adventure travel around the globe. These businesses are members of the Adventure Travel Trade Association and are committed to values that drive a necessary movement to change travel so that it benefits the businesses, the people and the environment of the places we travel.</p><hr/>
  
  <h1 className='bye'>WHAT IS ADVENTURE TRAVEL?</h1>

  <p className='container'>Adventure Travel is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places. From research and trends to best travel practices, ideal gear, and destinations and operators with outstanding commitments to responsible travel, we have everything you need to make sure your adventures align with your values.<br/>

Life-changing travel must also be sustainable travel.By bringing together a growing community of people committed to traveling thoughtfully and considerately, we help shape the adventure and eco-tourism industry as it grows. In response to travelers’ desires, tour operators, destinations and travel advisors are increasingly working to ensure their experiences provide an unforgettable journey in a responsible, sustainable way. Such commitment in turn honors the people, environment and economies of incredible destinations around the world.<br/>

Through compelling images and well-crafted stories, research and curated news of interest, Adventure.Travel inspires the curious to try new destinations, branch out in their activities, interact deeply with nature, and experience different cultures in the most respectful way possible.</p>
  <br/>
  <br/>
  {/* <div className='container'> */}
  {/* <div className='container'>  <img
  src="images/local.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
Supporting local  */}
{/* </div> */}

<div className='container'>
  <div className='row'>
    <div className='col-4'>
    <img
  src="images/local.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
<p></p>
 </div>
  
    <div className='col-4'>
    <img
  src="images/local1.png"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
    </div>
    <div className='col-4'>
    <img
  src="images/animal.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
    </div>
  </div>
</div>







<div className='container'>
  <div className='row'>
    <div className='col-4'>
    <img
  src="images/wild.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/> </div>
  
    <div className='col-4'>
    <img
  src="images/children.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
<p></p>
    </div>
    <div className='col-4'>
    <img
  src="images/bottle.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
<p></p>
    </div>
  </div>
</div>


<div className='container'>
  <div className='row'>
    <div className='col-4'>
    <img
  src="images/respect.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
  
/>
<p></p> </div>
  
    <div className='col-4'>
    <img
  src="images/adv.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
    </div>
    <div className='col-4'>
    <img
  src="images/indo.jpg"
  className="rounded"
  alt="Cinque Terre"
  width={304}
  height={236}
/>
    </div>
  </div>
</div>


<Footer/>




{/* </div> */}
{/* 

<div className="col-sm-4 col-xs-12 text-center">
  <img
    src="/images/raft.jpg"
    style={{ height: "auto", maxWidth: "50%", width: 90 }}
  />
  <div className="clearfix gutter-bottom" />
  <strong className="text-uppercase">
    <small>Supporting Local Economies</small>
  </strong>
</div> */}

  </>
  )
}
