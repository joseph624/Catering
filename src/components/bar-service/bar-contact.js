import React from 'react';
import Wine from '../../images/bar-service.jpg';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

 // Change to env variables
const SERVICE_ID = "service_rutoa35";
const TEMPLATE_ID = "template_e3r3hzf";
const USER_ID = "user_F2YlF3nkb6txgsCO1tpIt";


const BarContact = () => {


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
  
      <p>For more details &amp; booking information</p>
 
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
            <option>50-75</option>
            <option>75-100</option>
            <option>100-150</option>
            <option>150-200</option>
            <option>200-250</option>
            <option>250+</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user_bar_package">Package option</label>
          <select id="user_bar_package" className="form-control" name="user_bar_package">
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
    <p>Do you have a couple questions? Give us a call, we're happy to walk you through the process and answer any questions you may have. <br/><br/><a className="contact-phone" href="tel:7408830083">740-883-0083</a></p>
    <img alt="Wine Rack"  className="contact-img" src={Wine} />


 
 

</div>
</Fade>
</div>
 
 


 
</div>

</div>

);

}

export default BarContact;