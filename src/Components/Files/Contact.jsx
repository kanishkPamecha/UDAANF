import React, { useState ,useEffect} from 'react';
import './ContactUs.css';
import Instagram from '../Images/insta.png';
import Facebook from '../Images/insta.png';
import Youtube from '../Images/insta.png';
import { Link} from 'react-router-dom';
import join from '../Images/insta.png';
function ContactUs() {

  const backgroundImageUrl = 'https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=IN&markers=color:0x48487f|26.7656969,75.8536683&zoom=16&client=google-presto&signature=ORtFf5BUZsZI3fKQS-1IVS5yF4Q';

  const openGoogleMaps = () => {
    const searchQuery = encodeURIComponent('Udaan Aeromodelling Club');
    const latitude = 26.7656969;
    const longitude = 75.8536683;
    const googleMapsUrl = `https://www.google.com/maps?q=${searchQuery}&ll=${latitude},${longitude}&z=16`;
    window.open(googleMapsUrl, '_blank');
  };

  const SocialMediaImage = ({ socialMedia, link, image }) => {
    const handleImageClick = () => {
      window.location.href = link;
    };

    return (
      <img
        onClick={handleImageClick}
        src={image}
        alt={`${socialMedia} Link`}
        style={{ maxHeight: '70px', minWidth: '80px', cursor: 'pointer' }}
      />
    );
  };

  const JoinUsModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      mobileNumber: '',
      yearOfStudying: '',
      branch: '',
      image: null,
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    };

    const handleSubmit = () => {
      // Perform your form submission logic here
      console.log('Form submitted:', formData);
      // Reset form data and close the modal
      setFormData({
        name: '',
        mobileNumber: '',
        yearOfStudying: '1',
        branch: '',
        image: null,
      });
      onClose();
    }; 
	
	
const urll ="https://s2.q4cdn.com/299287126/files/doc_financials/2023/q3/AMZN-Q3-2023-Earnings-Release.pdf";
    return (
     
      isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{margin:'10%'}}>
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Join Us</h2>
            <form style={{display:'flex',flexDirection:'column'}}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              <br />
              <label>Mobile Number:</label>
              <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
              <br />
              <label>Year of Studying:</label>
              <input type="text" name="yearOfStudying" value={formData.yearOfStudying} onChange={handleInputChange} />
              <br />
              <label>Branch:</label>
              <input type="text" name="branch" value={formData.branch} onChange={handleInputChange} />
              <br />
              <label>Image:</label> <input type="file" name="image"/>
               <br />
              <label>Resume (PDF):</label>
        <input type="file" name="resume" accept=".pdf" /> <br />  
        <p><a href={urll} target="_blank" rel="noopener noreferrer">View T&C</a></p>
              <button type="button"  className ="   btn-primary button-form"onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      )
    );
  };

  const [isJoinUsModalOpen, setJoinUsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
    
  useEffect(() => {
	const handleScroll = () => {
	  setIsScrolled(window.scrollY > 0);
	};

	window.addEventListener('scroll', handleScroll);

	return () => {
	  window.removeEventListener('scroll', handleScroll);
	};
  }, []);
  const [show, setShow] = useState(false);

  const setshowSection = () => {
	setShow(!show);
  };
 

  return (
    <div>
    
    
   
      <div className="background-Container">

<div style= {{zIndex:"1001"}} className='h2'>UDAAN AEROMODELLING CLUB</div>
<div className='navbar'>

<div style= {{zIndex:"1001"}}className="tab_Group ">
  <div  className="txt  text-wrapper-selected   text-wrapper-3">About US</div>
  <Link   to="/achievements"  className=" txt text-wrapper our-achievments">Our Achievments</Link>
  <Link  to="/PhotoGallery" className=" txt text-wrapper text-wrapper-4">Galllery</Link>
  <Link to="/ContactUs"  className=" txt text-wrapper  text-wrapper-5">Contact US</Link>
</div>
</div>
    
        
           
      

  

        <div class="container d-flex justify-content-center align-items-center" >
        <div style={{display:'flex',paddingTop:"15vh" ,justifyContent:"space-around"}}>




  <form  style={{maxWidth:'50vw'  }} >
		<h1 class="titl text-center mb-4">Talk to Us</h1>

	
			<div class="form-group position-relative">
				<label for="formName" class="d-block">
					<i class="icon" data-feather="user"></i>
				</label>
				<input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Name"/>
			</div>

		
			<div class="form-group position-relative">
				<label for="formEmail" class="d-block">
					<i class="icon" data-feather="mail"></i>
				</label>
				<input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail"/>
			</div>


			<div class="form-group message">
				<textarea id="formMessage" class="form-control form-control-lg" placeholder="Mensagem"></textarea>
			</div>
		
	
			<div class="text-center">
				<button type="submit" class="btn btn-primary" tabIndex="-1">Send message</button>
			</div>
	</form>
	
	
	

	

	
</div>
        </div>
		<div> 
			<div style={{display:'flex'}}>

		    <button className='Bttn btn btn-primary' onClick={() => setJoinUsModalOpen(true)}> Join US</button>
			<img src={join} alt="" style={{maxWidth:'50vw'}}/>
			</div>
          <JoinUsModal isOpen={isJoinUsModalOpen} onClose={() => setJoinUsModalOpen(false)} />
		 
        </div>
<div className='NameMain ' style={{marginTop:'24%'}}>

<div class="map-container">
    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=ISI-6,%20UDAAN%20Aeromodelling%20Club%20Ricco%20Industrial%20Area,%20Institutional%20Area,%20Sitapura,%20Jaipur,%20Rajasthan%20302022+(UDAAN%20Aeromodelling%20Club)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
</div>
</div>

      

        <div className='Contact Down'>
          <p className='kaisa'>
            Follow Us On : - 
          </p> 
          <div className='fleaxx'>
            <SocialMediaImage socialMedia="Instagram" link="https://www.instagram.com/udaan_aeromodelling_club/" image={Instagram} />
            <SocialMediaImage socialMedia="Facebook" link="https://www.facebook.com/Udaanpoornima/" image={Facebook} />
            <SocialMediaImage socialMedia="Facebook" link="https://www.facebook.com/Udaanpoornima/" image={Facebook} />
            <SocialMediaImage socialMedia="Youtube" link="https://www.youtube.com/@UdaanAeroModelingclub" image={Youtube} />
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ContactUs;
