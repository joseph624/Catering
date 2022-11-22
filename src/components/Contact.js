import React from 'react';
import Taste from '../images/taste_small.webp';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

 // Change to env variables
const SERVICE_ID = "service_rutoa35";
const TEMPLATE_ID = "template_vzq5uoq";
const USER_ID = "user_F2YlF3nkb6txgsCO1tpIt";


const ContactPage = () => {


const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops',
        text: error.text,
      })
    });
    e.target.reset()
  };

  return (
  <div id="contact" className="content-section noPadTop " >
  


<div className="container-fluid pt-5 ">
<Fade bottom>
<div className="row justify-content-center text-center ">
    <div className="col-sm-12 mt-5 pt-5 ">
      <h2><span>CONTACT US</span></h2>
  
      <p>Schedule a free tasting today and "let us bring the fire to you."</p>
 
    </div>
  </div>
  </Fade>


 


  <div className="row p-5 form-conent justify-content-center contact-page">

     
   <Fade left>  
    <div className="col-lg-5 col-md-5 p-3 align-self-top">

    <h3 className="  txt-black"><strong>BY EMAIL</strong></h3>
    <br/>
    <p>Send us an email about your event and we'll get back to you within 24 hours.</p>
      <br/>
 
     {/* <form id="reused_form" encType="multipart/form-data" className="txt-black"> 
     
         
  <form class="gform" method="POST" data-email="jczaplicki624@gmail.com" action="https://script.google.com/macros/s/AKfycbzdpjpw81jYLl2NIe9-PqjYvgpESjQpYWw6-IiXW0tszX4c-_ZG8I4eBpQR-0kzKs4/exec">

  


*/}
     <form  onSubmit={handleOnSubmit}>
        <div className="form-elements">
          <div className="form-group">
          <label htmlFor="user_first_name">First Name</label>
          <input type="text" className="form-control" id="user_first_name" name="user_first_name" />
        </div>
        <div className="form-group">
           <label htmlFor="user_last_name">Last Name</label> 
          <input type="text" className="form-control" id="user_last_name" name="user_last_name" />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" className="form-control" id="user_email" name="user_email" />
        </div>
        <div className="form-group">
          <label htmlFor="user_phone_number">Phone</label>
          <input type="text" className="form-control" id="user_phone_number" name="user_phone_number" />
        </div>
        <div className="form-group">
          <label htmlFor="user_occasion">Occasion</label>
          <input type="text" className="form-control" id="user_occasion" name="user_occasion" />
        </div>
        <div className="form-group">
          <label htmlFor="user_location">Event Location</label>
          <input type="text" className="form-control" id="user_location" name="user_location" />
        </div>

        <div className="form-group ">
          <label htmlFor="user_date">Date of event</label>
          <input className="form-control" type="date" id="user_date" name="user_date" />
        </div>
        <div className="form-group ">
          <label htmlFor="user_time">Time of event</label>
          <input className="form-control" type="time" defaultValue="12:00:00" id="user_time" name="user_time" />
        </div>
        <div className="form-group">
          <label htmlFor="user_guests">Number of guests</label>
          <select id="user_guests" className="form-control" name="user_guests">
            <option>30-50</option>
            <option>50-75</option>
            <option>75-100</option>
            <option>100-150</option>
            <option>150-200</option>
            <option>200-250</option>
            <option>250+</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user_diet">Dietary Restrictions</label>
          <input type="text" className="form-control" id="user_diet" name="user_diet" />
        </div>
        <div className="form-group">
          <label htmlFor="user_bar_package">Bar Service (Optional)</label>
          <select id="user_bar_package" className="form-control" name="user_bar_package">
            <option>None</option>
            <option>Beer &amp; Wine</option>
            <option>Premium Beer &amp; Wine</option>
            <option>Beer, Wine &amp; Spirits</option>
            <option>Non-Alcoholic (Food purchase is required) </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Additional Information</label>
          <textarea className="form-control" id="message" name="message" rows={4} cols={25} defaultValue={""} />
        </div>
        <button type='submit'  className="btn btn-dark">Submit</button>
        </div>


        

      </form>  

    </div>
  
    </Fade>
 
 
 
 
    <Fade right>
     
    <div className="col-lg-5 col-md-5 p-3  align-self-top">

    <h3 className="txt-black"><strong>BY PHONE</strong></h3>
    <br/>
    <p>Do you have a couple questions? Give us a call, we're happy to walk you through the process and answer any questions you may have. <br/><br/><a className="contact-phone" href="tel:6144200216">614.420.0216</a></p>
 

<p className="txt-dark  "><strong>BOOKINGS: </strong>Don’t hesitate to inquire or give us a call. We are here to answer all your questions and work through all the details with you. It’s never too early to plan for your next event and solidify the date. We understand getting the food checked off the long list of tasks planning an event has, will give you the peace of mind as an event date starts to approach.</p>
<p className="txt-dark  "><strong>PAYMENT DETAILS: </strong>We require a $1000 deposit for all events, to reserve the date. A travel fee for a flat rate of $200 will apply, we do not travel further than a 2 hour distance from our main location in Zanesville, Ohio. The remaining payment will be collected 10 days prior to the event. An 18% gratuity will be added for the on-sight staff. </p>
 
 
    <img alt="pizza display"  className="contact-img" src={Taste} />

</div>
</Fade>
</div>
 
 


 
</div>

</div>

);

}

export default ContactPage;