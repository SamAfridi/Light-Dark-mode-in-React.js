
import './App.css';
import Footer from './Footer';
import User from './Header';
import Paragraph from './Paragraph';
import Services from './Services';
import React, { useState } from 'react'






function App() {
  const [mode,setmode] = useState('primary');
  const [text,settext] = useState('Enable Dark Mode');

  const toggle = () =>{
      if(mode==='primary'){

        setmode("dark");
        document.body.style.backgroundColor="#203A43";
        document.body.style.color="White";
        settext('Enable light Mode');
      }

      
      else{

        setmode("primary");
        document.body.style.backgroundColor="white";
        document.body.style.color="Black";
        settext('Enable Dark Mode');
      }

  }


  return (
    <div>
      
      <User text={text} mode={mode} toggle={toggle} title="Portfolio" HomeText="Home"
        logo="Design studios"
      />

      <Paragraph
        headingOne="Clean and professional Web Design"
        headingTwo="Providing high quality Web Solutions"
        paraHeading="We provide first class web sloutions for orginations and small business looking to
       make a big impact online.Our Services including web design ,Digital Marketing and Search engine Optimization"
      />

      <Services
        serviceType="Web Design"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />

      <Services
        serviceType="Digital Marketing"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />

      <Services
        serviceType="SEO"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />

      <Services
        serviceType="React.JS"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />

      <Services
        serviceType="YouTube Services"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />

      <Services
        serviceType="Web Development"
        ServicePara="We provide first class web sloutions for orginations and small business looking make a big impact online.Our Services including web design"
        serviceButton="Learn More..."
      />
      <Footer
        get="GET IN TOUCH"
        city="Peshawar Pakistan"
        phone="Phone: 03178513649"
        email="Email: info@happydeal.pk"
      />
      <Footer
        get="RECENT POSTS"
        city="What is Happydeal.pk ?"
        phone="August 18, 2020 No Comments"
        email="Contact Us"
      />

      <Footer
        get="CUSTOMER CARE"
        city="Help Center"
        phone="Track Your Order"
        email="Careers"
      />

      <Footer
        get="POLICY"
        city="Privacy Policy"
        phone="Terms & Conditions"
        email="Our Sitemap"
      />
  


    </div>



  
  );
};

export default App;
