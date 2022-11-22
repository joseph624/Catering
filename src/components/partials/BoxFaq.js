import React from 'react';
import Bar from '../images/bar.png';

const BoxFaq = () =>


<div className="row justify-content-center">
<div className="col-lg-2 col-md-2 p-2 faqs-box" >	
<p className="txt-dark txt-faq "><strong>HOW DO I BOOK AN EVENT?</strong></p><img alt="bar" className="faqs-box-bar d-sm-none d-md-block"  src={Bar} />
</div>
<div className="col-lg-8 col-md-8 p-2 pl-5" >	
<p className="txt-dark  ">Submit an inquiry on our website or E-mail us at info@mywoodfiredcatering.com or call us at 216.403.0874. We always try to respond swiftly, but please allow us 24 hours.</p>
</div>
</div>

export default FaqsPage;