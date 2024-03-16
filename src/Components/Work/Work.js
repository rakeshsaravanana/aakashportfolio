import React, { useEffect } from 'react';
import "./Work.css";
import Aos from 'aos';
import Images from './skillimg';

const Work = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='work-container' id='work'>
        <div className='work'>
           <h3 className='head' data-aos="fade-up" 
           >Hey! Here's Where I worked & <br/>My skills</h3>
        </div>
        <div className='workdetails' >
          <h3 className='companyname' data-aos="fade-up" >Avasoft<span className='pipe2'>| </span>Trainee Software Engineer<span className='pipe2'>| </span>5months</h3>
        </div>
        <div className='workpoints'>
          <p className='points' data-aos="fade-up" >Possessing expertise in Frontend development and ServiceNow development (ITSM).<br/>
          Acquired skills in HTML, CSS, and JavaScript through practical applications. Acquired knowledge in designing
          and executing validations using JavaScript.<br/>
          Furthermore, I have gained familiarity with the ServiceNow platform, such as capturing the update
          set and deploying it to the client instance.<br/>
          The ServiceNow platform is widely used by corporate entities for its capability to cater to multiple departments and a vast workforce.<br/>
          "Secured internship certification through application and interview process, gaining practical experience and contributing to Organization."
          </p>
        </div>

        <div className='myskills'>
          <img src={Images.html}  alt='' className='skill-logos' data-aos="flip-up" />
          <img src={Images.css}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.javascript}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.react}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.nodejs}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.python}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.mysql}  alt='' className='skill-logos' data-aos="flip-up"/>
          
        </div>
        
    </div>
  )
}

export default Work;