import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe,   faPhone, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () =>

<div className="container-fluid text-center content-footer p-5 app-footer">
  
 
	<div className="row pt-5 mt-5">
<div className="col-lg-4">
<p><FontAwesomeIcon icon={faEnvelope} /><a className="footer-link" href="mailto:catering@maxwellspizza.com" target="_blank" rel="noopener noreferrer">  catering@maxwellspizza.com</a></p>
 			<p><FontAwesomeIcon icon={faGlobe} /><a className="footer-link" href="http://maxwellswoodfired.com/" target="_blank" rel="noopener noreferrer"> maxwellswoodfired.com</a></p> 
 		</div>

<div className="  col-lg-4 ">
				 <p className="   d-lg-none   d-xl-none"><br/></p>
 			<p><FontAwesomeIcon icon={faMapMarkerAlt} /><a className="footer-link" href="https://www.google.com/maps/place/2759+Maysville+Pike,+Zanesville,+OH+43701/data=!4m2!3m1!1s0x8837f0209d0009e7:0x6578ed7ea2dd0a6f?sa=X&ved=2ahUKEwihtMS736r1AhWeSjABHXMAClMQ8gF6BAgOEAE" target="_blank" rel="noopener noreferrer"> 2759 Maysville Pike, Zanesville, OH 43701</a></p> 
 			<p> <FontAwesomeIcon icon={faPhone} /><a className="footer-link" href="tel:6144200216" > 614.420.0216</a></p> 

 			

</div>
 		



 		 		<div className="col-lg-4 ">
 		 		<p className="   d-lg-none   d-xl-none"><br/></p>
				  <p><FontAwesomeIcon icon={faFacebookF} /><a className="footer-link" href="https://www.facebook.com/Maxwells-Wood-Fired-Pizza-Catering-100455282549955" target="_blank" rel="noopener noreferrer"> Facebook</a></p>
<p><FontAwesomeIcon icon={faInstagram} />  <a className="footer-link" href="https://www.instagram.com/Maxwells_Catering/" target="_blank" rel="noopener noreferrer"> Instagram</a></p>
 			
 			
 		 
 		</div>

  
 			


 
	</div>
</div>


export default Footer;