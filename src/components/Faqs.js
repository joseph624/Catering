import React from 'react';
import Bar from '../images/bar.png';



function BoxFaq(props) {
  return (


  <div className="row justify-content-center">
<div className="col-lg-2 col-md-2 p-2 faqs-box" >	
<p className="txt-dark txt-faq "><strong>{props.title}</strong></p><img alt="spacer bar" className="faqs-box-bar d-sm-none d-md-block"  src={Bar} />
</div>
<div className="col-lg-8 col-md-8 p-2 pl-5" >	
<p className="txt-dark ">{props.content}</p>
</div>
</div>);
}



const FaqsPage = () =>
  <div id="home" className="content-section ">
  <div className="container-fluid pr-5 pl-5 pb-5">
   <div className="row justify-content-center ">
		<div className="col-lg-10 col-md-10 pr-5 pl-5 pb-5 text-center" >	
		 <h2 className="p-5 txt-black"><span>FAQs</span></h2>		 
 
	 <span className="text-uppercase txt-dark"><strong>Most commonly asked questions</strong></span>
 
</div>
</div>

 

 

  <BoxFaq 
title="WHAT KIND OF PARTIES DO YOU CATER?" 
content="We cater a wide variety of events and it goes well for pretty much every type of event. These range from Graduation Parties, Corporate Events, Birthday Parties, Bar/Bat Mitzvah’s, First Communions, Baptisms, Block Parties, Holiday Events, Tailgates and almost any other event you can think of. We also cater more formal events like Wedding Receptions, Rehearsal Dinners and even late night after Wedding Parties. " />
 
  <BoxFaq 
title="DO YOU CATER PUBLIC EVENTS?" 
content="While we are mainly a private event caterer, we will come to select Community Events, Street Fairs, Sporting Events, Food Festivals, Wine and Beer Tastings and Food Truck Events. Follow us on Facebook and Instagram to see where we will be set up on a weekly basis. " />


 <BoxFaq 
title="DO YOU HAVE INTEREST IN FUNDRAISERS OR CHARITY EVENTS" 
content="YES! We love to support a great cause! Please feel free to reach out to Matt King at 216.403.0874 to discuss further." />

 
 <BoxFaq 
title="HOW MUCH DOES IT COST FOR WOOD FIRED CATERING CO. TO CATER MY EVENT?" 
content="The cost is $15 per person, 50 person minimum, for us to come out and cater your event with our traditional and gourmet wood fired pizza display. There is a 18% gratuity added into the total that goes to the on-sight staff who are catering the event. This covers all of your costs to have us on-sight." />


 <BoxFaq 
title="HOW LONG DOES THE SERVICE LAST?" 
content="Plan for one hour of set up prior to the event’s start time, two hours of continual wood fired cooking of our pizzas and pepperoni breads, followed by one-half hour for clean-up. Additional hours of service can be added for $4 per person." />


<BoxFaq 
title="DOES EVERYONE AT MY PARTY ORDER THEIR OWN PIZZA?" 
content="All of our food is served buffet style with guest being able to come up to the table at their own leisure and choose between the 12 wood fired pizza options, pepperoni breads and house salad. All of our slices are cut into 16 slices so guests have the ability to try everything available. Guest do not order individual pizzas, but we will accommodate to personal requests if they are within our topping choices." />


 {/*
<div className="row justify-content-center ">
	<div className="col-lg-10 col-md-10 p-5 text-center" >
		<span className="text-uppercase txt-dark"><strong>BOOKING AND PRICING</strong></span>
	</div>
</div>

 

<BoxFaq 
title="HOW DO I BOOK AN EVENT?" 
content="Submit an inquiry on our website or E-mail us at info@mywoodfiredcatering.com or call us at 216.403.0874. We always try to respond swiftly, but please allow us 24 hours." />



<BoxFaq 
title="HOW FAR IN ADVANCE DO I HAVE TO BOOK?" 
content="We book on a first come, first serve basis and cannot guarantee availability. For peak periods (May through October) we encourage you to book as far in advance as possible." />

<BoxFaq 
title="IF THE DATE I WANT IS BOOKED, DO YOU HAVE A WAITING LIST?" 
content="Yes. Please reach out to us to discuss. Customers do change their dates from time to time and opening become available." />


<BoxFaq 
title="WHAT IF I NEED TO CANCEL?" 
content="We do understand that things happen and events have to be cancelled or moved from time to time. We require 60 days or more of notice of event cancellation for your deposit to be returned in full. 30 – 60 days before the event, we will return 50% of your deposit. Your deposit can also be used to solidify another date in the future." />


<BoxFaq 
title="WHAT IS YOUR MINIMUM NUMBER OF PEOPLE?" 
content="We have a minimum charge of 40 people Monday through Thursday and 50 people Friday through Sunday and Holidays. We will also come out for smaller parties but will still charge for the minimum number of people." />


<BoxFaq 
title="WHAT IS YOUR MAXIMUM PARTY NUMBER?" 
content="We are able to service a maximum of 250 guests per oven. We are able to accommodate more guests by adding another oven to the event. There is no additional charge for this. " />

<BoxFaq 
title="WHAT IF I NEED TO CANCEL?" 
content="We do understand that things happen and events have to be cancelled or moved from time to time. We require 60 days or more of notice of event cancellation for your deposit to be returned in full. 30 – 60 days before the event, we will return 50% of your deposit. Your deposit can also be used to solidify another date in the future." />

<BoxFaq 
title="WHEN DO YOU NEED TO KNOW OUR FINAL COUNT?" 
content="One week prior to the party is the latest we can make changes to your final count so we can buy and prepare the ingredients fresh for your event." />

<BoxFaq 
title="WHEN IS FINAL PAYENT DUE?" 
content="We will collect the final payment upon conclusion of the event. You are always welcome to pay in advance if the final count and all details are solidified. We accept all major debit/credit cards and checks. Gratuity can be paid in cash if preferred." />

<BoxFaq 
title="HOW FAR DO YOU TRAVEL?" 
content="We are based in Gahanna, Ohio. For parties greater than 25 miles away, we charge a $2 per mile travel fee to cover staff time and vehicle costs. We will travel up to 2 hours from Gahanna. We can also price out special events that may be further away." />



<div className="row justify-content-center ">
	<div className="col-lg-10 col-md-10 p-5 text-center" >
		<span className="text-uppercase txt-dark"><strong>MOTHER NATURE</strong></span>
	</div>
</div>

<BoxFaq 
title="WHAT HAPPENS IF IT RAINS OR SNOWS?" 
content="We want to do everything we can to have your party happen in rain or snow. We have a canopy that extends over our work area to protect the area in front of the oven and cover the serving area so we will plan to cook pizza unless there are severe weather conditions. If severe weather is in the forecast, we will work with you to either delay your event or reschedule for another day." />

<BoxFaq 
title="CAN YOU BRING PIZZAS INSIDE?" 
content="Yes, we can bring pizzas into the house, a tent or other covered areas that make it the most convenient for guests. We can do this in case of weather or if you would like to hire servers to run food into your party." />

<BoxFaq 
title="CAN YOU PULL UP TO MY GARAGE?" 
content="We can pull up close to a building or garage, but we cannot pull inside a building because of our wood fired oven." />



<div className="row justify-content-center ">
	<div className="col-lg-10 col-md-10 p-5 text-center" >
		<span className="text-uppercase txt-dark"><strong>PARKING AND SET UP</strong></span>
	</div>
</div>

<BoxFaq 
title="WHERE DO YOU PREFER TO PARK AND SETUP?" 
content="We prefer to park and set up in your driveway but if the ground in your backyard is level and firm enough, yes. Please be aware of the weight of the vehicle and the oven, as wet and uneven areas are not easily accessible." />

<BoxFaq 
title="CAN YOU PARK ON THE STREET IN FRONT OF MY HOUSE?" 
content="We can also park in the street, as long as the road is reasonably level and there is room for our prep station." />

<BoxFaq 
title="WHAT ARE THE SETUP DIMENSIONS?" 
content="We need a 20 ft by 10 ft area for our setup. Our oven is 10 ft long by 5 ft wide. The kitchen prep area is 10 ft by 10 ft." />
 
 
 <div className="row justify-content-center ">
	<div className="col-lg-10 col-md-10 p-5 text-center" >
		<span className="text-uppercase txt-dark"><strong>FOOD ALLERGY ACCOMODATIONS AND SPECIAL REQUESTS</strong></span>
	</div>
</div>

<BoxFaq 
title="DO YOU MAKE GLUTEN FREE PIZZAS?" 
content="Yes, please make sure to request gluten free pizza crusts for your event. These are separate frozen dough shells we will use to prepare a gluten free pizza. Please be aware though that all our pizzas are cooked in the same wood fired oven. We will handle gluten free pizzas separately with their own plates, pizza cutters and serving utensils." />

<BoxFaq 
title="WHAT ABOUT LACTOSE FREE PIZZAS?" 
content="Yes. We have lots of other delicious toppings in addition to our cheeses." />

<BoxFaq 
title="IS THERE ANY OPTIONS FOR VEGANS AND VEGETARIANS?" 
content="Yes, we have at least 4 vegetarian options on our menu and can always create a personal request with any of the ingredients we have. Vegan’s can be sure to come up to us and make a personal request for any creation that fits within their dietary restrictions." />

<BoxFaq 
title="LET US KNOW" 
content="Please make sure to alert us to any guests with food allergies in your party. we want to insure the safety of all those at your event." />

 */}
 </div>

  </div>

export default FaqsPage;