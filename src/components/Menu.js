import React from "react";
import Peel from "../images/peel-white.png";
import Fade from "react-reveal/Fade";
import Buffalo from "../images/buffalo.webp";
import Meatball from "../images/meatball.webp";
import Pepperoni from "../images/pepperoni.webp";
import Pesto from "../images/pesto.webp";
import Margherita from "../images/margherita.webp";
import Prosciutto from "../images/prosciutto.webp";
import White from "../images/white.webp";
import MeatLovers from "../images/meat.webp";
import Nashville from "../images/nashville.webp";
import Sirhacha from "../images/siracha.webp";
import PepperoniRoll from "../images/pepperoni-roll.webp";
import Chacuterie from "../images/charcuterie-menu.jpg";

import { Link } from 'react-router-dom';


const MenuPage = () => (
  <div id="menu" className="  ">
    <div className=" block-black ">
      <div className="block-box-white" />
    </div>
    <div className=" block-black pr-4 pl-4 ">
 
        <div className="container-fluid  pb-5 block-content ">
		<Fade right>
          <div className="row justify-content-center pt-5">
            <div className="col-sm-6 mt-5   p-5 ">
              <h2 className="dark txt-white">MENU</h2>
            </div>
          </div>

          <div className="row justify-content-center text-center ">
            <div className="col-sm-10 mt-5 mb-5 ">
              <h5 className="txt-white text-uppercase">
                <strong>Gourmet Wood Fired Pizza display</strong>
              </h5>
              <hr className="hr-style-grey" />

              <br />

              <p className="txt-grey txt-med">
                Our variety of ingredients are prepared in a manner to create
                the perfect bite in every slice, we will make 11 variations of
                wood fired pizzas ranging from traditional, vegetarian and
                specialties from the following selections.
              </p>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}CLASSIC
                CHEESE &amp; PEPPERONI
              </h4>
              <p className="txt-grey">Cheese or Pepperoni</p>
              <img
            alt="Pepperoni Pizza"
            className="img-thumbnail img-block"
            src={Pepperoni}
            width="300"
            height="auto"
          />
            </div>
            <div className="col-lg-5 col-md-5 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                MEATBALL MOZZ
              </h4>
              <p className="txt-grey">
                Red Sauce, Fresh Mozzarella, Meatball, Basil &amp; Cracked
                Pepper
              </p>
              <img
            alt="Meatball Pizza"
            className="img-thumbnail img-block"
            src={Meatball}
            width="300"
            height="auto"
          />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}GRECIAN
                - V
              </h4>
              <p className="txt-grey">
                White Garlic Sauce, Pizza Cheese, Feta, Roasted Red Tomatoes,
                Spinach &amp; Balsamic Glaze
              </p>
              <img
            alt="Grecian Pizza"
            className="img-thumbnail img-block"
            src={White}
            width="300"
            height="auto"
          />
            </div>
            <div className="col-lg-5 col-md-5 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                MARGAHERITA - V
              </h4>
              <p className="txt-grey">
                Red Sauce, Basil, Tomatoes &amp; Fresh Mozzarella With a Balsamic Glaze
              </p>
      
              <img
            alt="Margaherita Pizza"
            className="img-thumbnail img-block"
            src={Margherita}
            width="300"
            height="auto"
          />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}HOT
                HONEY SRIRACHA
              </h4>
              <p className="txt-grey">
                Honey Sriracha Sauce, Pizza Cheese, Mandarin Oranges &amp;
                Chicken{" "}
              </p>
              <img
            alt="Sirhacha Pizza"
            className="img-thumbnail img-block"
            src={Sirhacha}
            width="300"
            height="auto"
          />
            </div>
            <div className="col-lg-5 col-md-5 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}MEAT
                LOVERS
              </h4>
     
              <p className="txt-grey">Pepperoni, Sausage, Ham &amp; Bacon</p>  
              <img
            alt="Meat Lovers Pizza"
            className="img-thumbnail img-block"
            src={MeatLovers}
            width="300"
            height="auto"
          />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}BUFFALO
                CHICKEN
              </h4>
              <p className="txt-grey">
              Buffalo Sauce, Pizza Cheese, Chicken &amp; Bacon With a Ranch &amp; Buffalo Drizzle
              </p>
              <img
            alt="Buffalo Chicken Pizza"
            className="img-thumbnail img-block"
            src={Buffalo}
            width="300"
          />
            </div>
            <div className="col-lg-5 col-md-5 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}CHICKEN
                PESTO - V OPTIONAL
              </h4>
              <p className="txt-grey">
                Basil Pesto Sauce, Chicken, Artichoke hearts &amp; Fontina
                Cheese
              </p>
              <img
            alt="Pesto Pizza"
            className="img-thumbnail img-block"
            src={Pesto}
            width="300"
            height="auto"
          />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}ARUGULA
                PROSCIUTTO
              </h4>
              <p className="txt-grey">
                White Garlic Sauce, Fresh Mozzarella, Prosciutto, Fig Jam &amp;
                Arugula
              </p>
              <img
            alt="Prosciutto Pizza"
            className="img-thumbnail img-block"
            src={Prosciutto}
            width="300"
            height="auto"
          />
            </div>
            <div className="col-lg-5 col-md-5 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                NASHVILLE HOT CHICKEN
              </h4>
              <p className="txt-grey">
              Spicy BBQ sauce, Smoked Cheese, Pecorino, Hot Crispy Chicken &amp; Dill Pickles With a Spicy BBQ Drizzle
              </p>
              <img
            alt="Nashville Hot Pizza"
            className="img-thumbnail img-block"
            src={Nashville}
            width="300"
            height="auto"
          />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-10 pb-5 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                CAULIFLOWER CRUST
              </h4>
              <p className="txt-grey">
                Can be added to any pizza for a small charge
              </p>
            </div>
          </div>
</Fade>

 
    
     <Fade right>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-10 mb-5 pt-5  ">
              <h5 className="txt-white text-uppercase">
                <strong>SALADS</strong>
              </h5>
              <hr className="hr-style-grey" />
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-2 col-md-2 pb-1 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}ROMAINE
                ICEBERG
              </h4>
              <p className="txt-grey">Tomatoes, Cucumber &amp; Peppers</p>
            </div>
            <div className="col-lg-2 col-md-2 pb-1">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                CAESAR
              </h4>
              <p className="txt-grey">Croutons &amp; Shaved Cheese</p>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 p-4 ">
              <p className="txt-grey">
                <strong className="txt-white">DRESSINGS: </strong>
                <br />
                Ranch, Balsamic, Raspberry Vinaigrette &amp; Caesar
              </p>
            </div>
          </div>
</Fade>
<Fade right>
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 mb-5 pt-5  ">
              <h5 className="txt-white text-uppercase">
                <strong>APPETIZERS</strong>
              </h5>
              <hr className="hr-style-grey mb-1" />             
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-1 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}FRUIT
                TRAY
              </h4>
              {/* <p className="txt-grey">
			  Watermelon, Cantelope, Honey Dew, Strawberry &amp; Kiwi </p> */}
            </div>
            <div className="col-lg-3 col-md-3 pb-1">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                BACON WRAPPED SCALLOPS
              </h4>
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-1 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}VEGGIE
                TRAY
              </h4>
              {/* <p className="txt-grey">
			  Watermelon, Cantelope, Honey Dew, Strawberry &amp; Kiwi </p> */}
            </div>
            <div className="col-lg-3 col-md-3 pb-1">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                SPINACH FETA PIZZA ROLL
              </h4>
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-1 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}SHRIMP
              </h4>
              {/* <p className="txt-grey">
			  Watermelon, Cantelope, Honey Dew, Strawberry &amp; Kiwi </p> */}
            </div>
            <div className="col-lg-3 col-md-3 pb-1">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                PEPPERONI ROLL
              </h4>
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-1 ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                BRUSHCETTA
              </h4>
              {/* <p className="txt-grey">
			  Watermelon, Cantelope, Honey Dew, Strawberry &amp; Kiwi </p> */}
            </div>
            <div className="col-lg-3 col-md-3 pb-1">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                MEATBALLS &amp; SAUCE
              </h4>
            </div>
            
          </div>
		  </Fade>

      <Fade left>
      <div className="row justify-content-center text-center">
        <div className="col-lg-3 col-md-3  mb-5  mt-5">
          <img
            alt="Pepperoni Roll Appetizer"
            className="img-thumbnail img-block"
            src={PepperoniRoll}
            width="600"
            height="400"
          />
        </div>
        </div>
        </Fade>

  

     
		  <Fade right>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-10 mb-5 pt-5 mt-5  ">
              <h5 className="txt-white text-uppercase">
                <strong>Package Options</strong>
              </h5>
              <hr className="hr-style-grey" />

     
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}PACKAGE
                ONE 
              </h4>
              <p className="txt-grey">
                - Any 4 Combinations Of Wood Fired Pizza
              </p>
              <p className='txt-grey'>
                  <strong>$19 per person</strong>
                </p>
            </div>
            <div className="col-lg-3 col-md-3 pb-5">
              <h4>
                <img alt="wood fired pizza peel " src={Peel} /> {"\u00A0"}
                PACKAGE TWO
              </h4>
              <p className="txt-grey">
                - Any 4 Combinations Of Wood Fired Pizza
                <br />- Choice of One Appetizer
                <br />- Salad
              </p>
              <p className='txt-grey'>
                  <strong>$22 per person</strong>
                </p>
            </div>
          </div>

          <div className="row justify-content-center text-left">
            <div className="col-lg-3 col-md-3 pb-5">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}PACKAGE
                THREE
              </h4>
              <p className="txt-grey">
                - Any 4 Combinations Of Wood Fired Pizza
                <br />- Choice of Two Appetizers
                <br />- Salad
              </p>
              <p className='txt-grey'>
                  <strong>$25 per person</strong>
                </p>
            </div>
            <div className="col-lg-3 col-md-3 pb-5">
              <h4>
                <img alt="wood fired pizza peel " src={Peel} /> {"\u00A0"}
                PACKAGE FOUR
              </h4>
              <p className="txt-grey">
                - Any 4 Combinations Of Wood Fired Pizza
                <br />- Choice of Three Appetizer
                <br />- Salad
              </p>
              <p className='txt-grey'>
                  <strong>$28 per person</strong>
                </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5 p-4 ">
              <p className="txt-grey">
                <strong className="txt-white">EVERY EVENT INCLUDES: </strong>
                Our wood fired pizza display, handcrafted pepperoni breads and
                our mixed greens salad. Durable plates, napkins and silverware.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 p-4 ">
              <p className="txt-grey">
                <strong className="txt-white">DIETARY ACCOMODATIONS: </strong>
                We understand that planning an event for this many guest comes
                with dietary restrictions. We can accommodate to most dietary
                restrictions. Have a special request feel free to ask us.
              </p>
            </div>
          </div>


		  </Fade>

 
      <Fade right>
        <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 mb-5 mt-5 pt-5  ">
              <h5 className="txt-white text-uppercase">
                <strong>CHARCUTERIE BOARDS</strong>
              </h5>
              <hr className="hr-style-grey mb-5" />
              <h4 className="mt-5">
                <span  style={{fontSize: 15}}>*ADD-ON OR SEPARATE EVENT ONLY*</span>
              </h4>
              <p className="txt-grey txt-med">
                Smoked cheddar Cheese, Smoked Gouda Cheese, Red Fox Cheese, Port
                wine Derby Cheese, Agriform Piave Cheese, Lightly smoked, dry
                cured prosciutto, Assortment of Crackers, Veggies &amp; Fruits
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center">
        <div className="col-lg-3 col-md-3    mt-3 mb-5">
          <img
            alt="Chacuterie Boards"
            className="img-thumbnail img-block"
            src={Chacuterie}
            width="600"
            height="400"
          />
        </div>
        </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 mb-5 mt-1 pt-1  ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                FULL TABLE GRAZE - $1400
              </h4>
              <p className="txt-grey txt-med">
                The most standard for large events.<br/>6 foot table graze<br/>Serves 80-100 people
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 mb-5 mt-1 pt-1  ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                COCKTAIL HOUR GRAZE - $840
              </h4>
              <p className="txt-grey txt-med">
                Serves 50-60 people
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-5 mb-5 mt-1 pt-1  ">
              <h4>
                <img alt="wood fired pizza peel" src={Peel} /> {"\u00A0"}
                DINNER PARTY GRAZE - $300
              </h4>
              <p className="txt-grey txt-med">
                Serves 16-20 people
              </p>

            </div>
          </div>
        </Fade>

        </div>

    </div>
    <div className="container-fluid">
    <div className="row justify-content-center cta-box">

    
<div className="col-lg-6 col-md-6 p-4 text-center">
<h5 className="txt-white text-uppercase p-2">
      <strong>Bar Service Now Available</strong>

    </h5>
    <Link to="/bar-service" >
      <button className="btn btn-outline-light btn-lg">Bar Service Packages</button>
      </Link>
    </div>
</div>
</div>
  </div>
);

export default MenuPage;
