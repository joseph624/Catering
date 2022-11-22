import React from "react";
import Layout from "../shared/Layout";
import Fade from "react-reveal/Fade";
import WineGlass from "../../images/glass-with-wine.png";
import BarContact from "./bar-contact";
import Beer from "../../images/beer.jpg"
import Wine from "../../images/wine.jpg"
import Spirits from "../../images/spirits.jpg"

const alcoholCatering = () => {
  return (
    <Layout>
      <div className='block-black'>
        <div className='container-fluid  pb-5 block-content pl-5 pr-5'>
          <Fade right>
            <div className='row justify-content-center top-content'>
              <div className='col-sm-6 mt-5 p-5 '>
                <h2 className='dark txt-white'>Bar Service</h2>
              </div>
            </div>

            <div className="row justify-content-center text-center">
 
        <div className="col-lg-3 col-md-3  p-4">
          <img
            alt="Margherita pizza"
            className="img-thumbnail img-block"
            src={Beer}
            width="600"
            height="400"
          />
        </div>
 
        <div className="col-lg-3 col-md-3  p-4">
          <img
            alt="Prosciutto pizza"
            className="img-thumbnail img-block"
            src={Wine}
            width="600"
            height="400"
          />
        </div>
   
        <div className="col-lg-3 col-md-3 p-4">
          <img
            alt="White Sauace Roasted Tomato Pizza"
            className="img-thumbnail img-block"
            src={Spirits}
            width="600"
            height="400"
          />
        </div>
  
      </div>

            <div className='row justify-content-center text-center '>
              <div className='col-sm-10 mt-5 mb-5 '>
                <h5 className='txt-white text-uppercase'>
                  <strong>PACKAGE OPTIONS</strong>
                </h5>
                <hr className='hr-style-grey' />
                <br />
                <p className='txt-grey txt-med'>
                  Let us bring the bar to you with one of our three great
                  package options.
                </p>
              </div>
            </div>

            <div className='row justify-content-center text-center'>
              <div className='col-lg-4 col-md-4 pb-5 '>
                <h4>
                  <img
                    alt='wood fired pizza peel'
                    className='icon'
                    src={WineGlass}
                  />{" "}
                  {"\u00A0"}
                  BEER &amp; WINE
                </h4>

                <p className='txt-grey'>
                  Your choice of three domestic / import beer options &amp; two
                  wine options
                </p>
                <p className='txt-grey'>
                  <strong>$4.50 per person</strong>
                </p>
                {/* <img
            alt="Pepperoni Pizza"
            className="img-thumbnail img-block"
            src={Pepperoni}
            width="300"
            height="auto"
          /> */}
              </div>

              <div className='col-lg-4 col-md-4 pb-5 '>
                <h4>
                  <img
                    alt='wood fired pizza peel'
                    className='icon'
                    src={WineGlass}
                  />{" "}
                  {"\u00A0"}
                  PREMIUM BEER &amp; WINE
                </h4>

                <p className='txt-grey'>
                  Your choice of three domestic / import beer options &amp;
                  three wine options
                </p>
                <p className='txt-grey'>
                  <strong>$7.50 per person</strong>
                </p>
                {/* <img
            alt="Pepperoni Pizza"
            className="img-thumbnail img-block"
            src={Pepperoni}
            width="300"
            height="auto"
          /> */}
              </div>
            </div>
            <div className='row justify-content-center text-center'>
              <div className='col-lg-4 col-md-4 pb-5'>
                <h4>
                  <img
                    alt='wood fired pizza peel'
                    className='icon'
                    src={WineGlass}
                  />{" "}
                  {"\u00A0"}
                  BEER, WINE &amp; SPIRITS
                </h4>
                <p className='txt-grey'>
                  Your choice of four domestic / import beer, three wine options
                  &amp; three spirit options
                </p>{" "}
                <p className='txt-grey'>
                  <strong>$11.50 per person</strong>
                </p>
                {/* <img
            alt="Meatball Pizza"
            className="img-thumbnail img-block"
            src={Meatball}
            width="300"
            height="auto"
          /> */}
              </div>

              <div className='col-lg-4 col-md-4 pb-5'>
                <h4>
                  <img
                    alt='wood fired pizza peel'
                    className='icon'
                    src={WineGlass}
                  />{" "}
                  {"\u00A0"}
                  NON ALCOHOLIC / SOFT DRINKS
                </h4>
                <p className='txt-grey'>
                  Your choice of three non-alcoholic beverages
                  <br />
                  (This package cannot be purchased individually)
                </p>{" "}
                <p className='txt-grey'>
                  <strong>$2.50 per person</strong>
                </p>
                {/* <img
            alt="Meatball Pizza"
            className="img-thumbnail img-block"
            src={Meatball}
            width="300"
            height="auto"
          /> */}
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='col-lg-5 col-md-5 p-4 '>
                <p className='txt-grey'>
                  <strong className='txt-white'>HOSTED EVENTS: </strong>
                  <br />
                  <ul>
                    <li>Miniumum guest count: 70</li>
                    <li>Miniumum guest count with food: 50</li>
                    <li>Miniumum of two hour service time. An additional <u>$3.00 per person, per hour</u> will be charched after two hours</li>
                    <li>Additional fees may apply</li>
                  </ul>
                </p>
              </div>
              <div className='col-lg-5 col-md-5 p-4 '>
                <p className='txt-grey'>
                  <strong className='txt-white'>WHAT'S INCLUDED': </strong>
                  <br />               
                  <ul>
                    <li>All alcohol packages include water &amp; soft drinks</li>
                    <li>All packages include cups, ice &amp; napkins</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-5 col-md-5 p-4 '>
                <p className='txt-grey'>
                  <strong className='txt-white'>DISCLAIMER: </strong>
                  <br />
                  <i>Maxwell's Wood-Fired Catering ensures your guest will enjoy an open bar customized with the package options listed above. Alcoholic Beverages are puchased at the state minimum plus a handlers fee that is priced per person. Additional cost will consist of bartending staff, travel fee, tax(7.25%) &amp; gratuity(18%).</i>
                </p>
              </div>
            
            </div>
          </Fade>
        </div>
      </div>
      <BarContact />
    </Layout>
  );
};

export default alcoholCatering;
