import React from 'react';
import Peel from '../images/peel-white.png';

const AboutPage = () =>
  <div id="about" className="content-section text-center">
 
   


<div className="container-fluid">


<div className="row justify-content-center">
		<div className="col-lg-8 col-md-8 p-5 " >	
		 <h2 className="p-5 cpo "><span>OUR MISSION</span></h2>		 
	 	<p className="txt-dark pb-5 mb-5">Deliver an unforgetable experience, satisfy all guests, making it our priority that your event is a success.</p>
	 
</div>
</div>

  <div className=" row block-orange pb-5">
  <div className="block-box-white"></div>
  </div>

 
 

<div className="row justify-content-center row block-orange p-5  ">
 
 
 
	 	<div className="col-lg-4 p-1">
		<h4 className="light-orange"><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}offerings</h4>
		<br/>
		 <span className="light-pink">With over 25 toppings, we have the ability to make over 15 types of wood-fired pizza that will be served buffet style, giving guests the ability to sample all the traditional and gourmet pizzas.</span>
		 </div>


	 	 <div className="col-lg-4 p-1">
	 	 <h4 className="light-orange"><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}accommodations</h4>
		<br/>
		 <span className="light-pink">Our menu includes wood-fired pizza, hand crafted pepperoni breads and our house salad. We have the ability to accommodate to dietary restrictions including Gluten free, lactose allergies, nut allergies, vegans and most others.</span>
	  </div>

	  </div>

	  <div className="row justify-content-center row block-orange p-5  ">

	 	<div className="col-lg-4 p-1">
	 	<h4 className="light-orange"><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}preparation</h4>
		<br/>
		 <span className="light-pink">We will show up to your event an hour before and get the oven up to temperature and start to prepare the pizzas. All of the pizza preparation is done on sight allowing guests to watch their pizzas be created right in front of them.</span>
		  </div>
	 	<div className="col-lg-4 p-1">
	 	<h4 className="light-orange"><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}vision</h4>
		<br/>
		  <span className="light-pink">Our Goal is to make your special day a one of a kind experience for all your guests and leave you worry free to enjoy the party.</span>
	  </div>
	  	  </div>

	 
	 
	 
		
		 



 
 
 

 

</div>
</div>

export default AboutPage;