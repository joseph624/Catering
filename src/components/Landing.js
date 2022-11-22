import React from "react";

import Margherita from "../images/margherita.webp";
import Prosciutto from "../images/prosciutto.webp";
import White from "../images/white.webp";
import Fade from "react-reveal/Fade";

const LandingPage = () => (
  <div id="about" className="content-section ">
    <div className="container-fluid">
    <Fade bottom>    
      <div className="row justify-content-center ">
        <div className="col-lg-10 col-md-10 p-5 text-center">
 
        <h2 className="p-5 txt-black">
            <span>WHO WE ARE</span>
          </h2>
    
            <p className="txt-dark  txt-med">
            With over five years of experience, we understand the importance of
            what food means to the ones you celebrate  with. Let
            our friendly and punctual team create hand-crafted artisan pizzas
            right in front of your eyes.
          </p>

        </div>
      </div>
      </Fade>
      <div className="row justify-content-center text-center">
      <Fade left>
        <div className="col-lg-3 col-md-3  p-4">
          <img
            alt="Margherita pizza"
            className="img-thumbnail img-block"
            src={Margherita}
            width="600"
            height="400"
          />
        </div>
        </Fade>
        <Fade left>
        <div className="col-lg-3 col-md-3  p-4">
          <img
            alt="Prosciutto pizza"
            className="img-thumbnail img-block"
            src={Prosciutto}
            width="600"
            height="400"
          />
        </div>
        </Fade>
        <Fade left>
        <div className="col-lg-3 col-md-3 p-4">
          <img
            alt="White Sauace Roasted Tomato Pizza"
            className="img-thumbnail img-block"
            src={White}
            width="600"
            height="400"
          />
        </div>
        </Fade>
      </div>
      <Fade bottom>   
      <div className="row justify-content-center text-center">
        <div className="col-lg-10 col-md-10  p-3">
          <h3>THE EXPERIENCE</h3>
          <hr className="hr-style-light" />
          <br />

          <span className="text-uppercase txt-dark">
            <strong>
              With our mobile wood fired pizza oven, you’ll watch as pizzas are
              tossed, topped, and baked over the fresh smell of hickory wood.
            </strong>
          </span>
        </div>
      </div>
      </Fade>
      <Fade bottom>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>THE WOOD FIRED OVEN:</strong> Our wood fired oven has been custom fabricated to cook wood fired pizzas at your location. The oven is designed to cook at temperatures up to 800 degrees and add that wood fired accent to your perfectly light thin crusted pizza.</p>
        </div>
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>THE BUFFET TABLE:</strong> Our buffet style pizza display allows guests to try a variety of our handcrafted pizza creations. We keep pace with your party and maintain a smooth flow of service. We will provide an attractive display that will have a clean rustic feel.
          </p>
        </div>
      </div>
   

      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>OUR TEAM:</strong> Every event includes our fully trained
            team of pizza and event professionals.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>EVENT TIME:</strong> Plan for one hour of set up prior to
            the event’s start time, two hours of continual wood fired cooking of
            our pizzas and pepperoni breads, followed by one-half hour for
            clean-up.{" "}
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>THE SETUP:</strong> With our setup typically being the first
            thing that guests are going to see, we want to make a strong first
            impressions. We have a clean and flashy set up that will take up a
            10 ft by 20 ft area consisting of our mobile wood fired oven, logoed
            canopy with decorative lights, prep tables, ingredient coolers &amp;
            fully decorated serving table. The oven is movable, but we want to
            ensure it is positioned on flat ground and in area easily accessible
            to guests.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 p-4 ">
          <p className="txt-dark  ">
            <strong>YOUR PARTY IS TAKEN CARE OF:</strong> Whether you are having a graduation party, wedding, corporate event or any other, we will make sure to take care of all the details. We make booking stress-free, asking the necessary questions and gathering all the information needed to ensure your event runs smoothly. Our goal is to leave you with one less thing to worry about for this special day. Pick your date, time and location and leave the rest to us!
          </p>
        </div>
     
      </div>
      </Fade>
    </div>
  </div>
);

export default LandingPage;
