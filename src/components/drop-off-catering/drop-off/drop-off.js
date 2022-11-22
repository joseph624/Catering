import React from "react";

import Fade from "react-reveal/Fade";

import Layout from "../../shared/Layout";

import data from "../../../drop-off-catering.json";

import Peel from "../../../images/peel-white.png";
import Sandwiches from "../../../images/sandwiches.jpg";
import Salads from "../../../images/salad.jpg";
import Charcuterie from "../../../images/charcuterie.jpg";

const DropOff = () => {
  return (
    <Layout>
      <div className='block-black'>
        <div className='container-fluid  pb-5 block-content pl-4 pr-4'>
          <Fade right>
            <div className='row justify-content-center top-content'>
              <div className='col-sm-6 mt-5 pb-5 pt-5 '>
                <h2 className='dark txt-white'>Drop Off Catering</h2>
              </div>
            </div>

            <div className='row justify-content-center text-center pr-4 pl-4'>
              <div className='col-lg-3 col-md-3  p-4'>
                <img
                  alt='Margherita pizza'
                  className='img-thumbnail img-block'
                  src={Sandwiches}
                  width='600'
                  height='400'
                />
              </div>

              <div className='col-lg-3 col-md-3  p-4'>
                <img
                  alt='Prosciutto pizza'
                  className='img-thumbnail img-block'
                  src={Salads}
                  width='600'
                  height='400'
                />
              </div>

              <div className='col-lg-3 col-md-3 p-4'>
                <img
                  alt='White Sauace Roasted Tomato Pizza'
                  className='img-thumbnail img-block'
                  src={Charcuterie}
                  width='600'
                  height='400'
                />
              </div>
            </div>

            <div className='row justify-content-center text-center '>
              <div className='col-sm-10 mt-5 mb-5 '>
                <h5 className='txt-white text-uppercase'>
                  <strong>Menu</strong>
                </h5>
                <hr className='hr-style-grey' />
                <br />
                <p className='txt-grey txt-med'>
                  Orders must be placed online 12hr - 24hrs in advance.
                </p>
              </div>
            </div>

            <div className='row justify-content-center text-center text-uppercase'>
              <div className='col-sm-6 mt-5 p-4 '>
                <h5 className='txt-white text-uppercase'>
                  <strong>Sandwiches / Wraps</strong>
                </h5>
                <hr className='hr-style-grey' />
                <br />
                <p className='txt-grey txt-med'>{data.handhelds.description}</p>
                <br />
                {data.handhelds.items.map((entry, i) => (
                  <div className='p-3' key={entry.name}>
                    <h4>
                      <img
                        alt='wood fired pizza peel'
                        className='icon'
                        src={Peel}
                      />{" "}
                      {"\u00A0"}
                      {entry.name}
                    </h4>

                    <p className='txt-grey'>{entry.description}</p>
                  </div>
                ))}
              </div>

              <div className='col-sm-6 mt-5 p-4 '>
                <h5 className='txt-white text-uppercase'>
                  <strong>Salads</strong>
                </h5>
                <hr className='hr-style-grey' />
                <br />
                <p className='txt-grey txt-med'>{data.salads.description}</p>
                <br />
                {data.salads.items.map((entry, i) => (
                  <div className='p-3' key={entry.name}>
                    <h4>
                      <img
                        alt='wood fired pizza peel'
                        className='icon'
                        src={Peel}
                      />{" "}
                      {"\u00A0"}
                      {entry.name}
                    </h4>

                    <p className='txt-grey'>{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='row justify-content-center text-center text-uppercase'>
              <div className='col-sm-6 mt-5 p-4 '>
                <h5 className='txt-white text-uppercase'>
                  <strong>Sides &amp; Extras</strong>
                </h5>
                <hr className='hr-style-grey' />
                <br />

                {data.sides.items.map((entry, i) => (
                  <div className='p-3' key={entry.name}>
                    <h4>
                      <img
                        alt='wood fired pizza peel'
                        className='icon'
                        src={Peel}
                      />{" "}
                      {"\u00A0"}
                      {entry.name}
                    </h4>

                    <p className='txt-grey'>{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className='container-fluid'>
        <Fade right>
          <div className='row justify-content-center text-center text-uppercase'>
            <div className='col-sm-6 mt-5 p-5 pb-0 '>
              <h5 className='text-uppercase txt-black'>
                <strong>Packages &amp; Pricing</strong>
              </h5>
              <hr className='hr-style-grey' />
            </div>
          </div>

          <div className='row justify-content-center text-center  '>
            <div className='col-sm-4  p-4 '>
              <h3 className='  txt-black'>
                <strong>
                  <u>BOXED LUNCH</u>
                </strong>
              </h3>
              <br />
              <h4 className='txt-black'>
                <strong>SANDWICH/WRAP - $16 per box</strong>
              </h4>
              <br />
              <p className='txt-med'>
                Each box includes a signature sandwich, soup &amp; fresh
                seasonal fruit
              </p>
              <br />
              <br />
              <h4 className='txt-black'>
                <strong>SALAD - $16 per box</strong>
              </h4>
              <br />
              <p className='txt-med'>
                Each box includes a signature sandwich, soup &amp; a roll
              </p>
            </div>

            <div className='col-sm-4  p-4 '>
              <h3 className='  txt-black'>
                <strong>
                  <u>SANDWICH PLATTER</u>
                </strong>
              </h3>
              <br />
              <h4 className='txt-black'>
                <strong>
                  PETITE SANDWICHES - $17 per guest (25 person minimum)
                </strong>
              </h4>
              <br />
              <p className='txt-med'>
                Each box includes a signature sandwich, soup &amp; fresh
                seasonal fruit
                <br />
                <br />
                <strong>Pick two: </strong>
                <br /> Signature Sandwiches
                <br />
                <br />
                <strong>Pick one: </strong>
                <br /> Classic Chicken Caesar or Spinach Feta Salad
                <br />
                <br />
                <strong>Pick one: </strong>
                <br /> Greek Pasta Salad or Fresh Seasonal Fruit
              </p>
            </div>
          </div>
          <div className='row justify-content-center text-center '>
            <div className='col-sm-6  p-4 '>
              <h3 className='  txt-black'>
                <strong>
                  <u>CHARCUTERIE BOX</u>
                </strong>
              </h3>
              <br />
              <h4 className='txt-black'>
                <strong>$19 per box (Serves 1-2 guests)</strong>
              </h4>
              <br />
              <p className='txt-med'>
                Variety of meats and cheeses with an assortment of crackers,
                veggies &amp; fruits
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className='container-fluid'>
        <div className='row justify-content-center cta-box'>
          <div className='col-lg-6 col-md-6 p-4 text-center'>
            <h5 className='txt-white text-uppercase p-2'>
              <strong>Call Now To Order!</strong>
            </h5>

            <a href='tel:740-677-5522'>
              <button className='btn btn-outline-light btn-lg'>
                740-677-5522
              </button>
            </a>
            <br />
            <br />
            <p className='txt-white'>
              Orders must be placed online 12hr - 24hrs in advance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DropOff;
