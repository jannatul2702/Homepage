import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import Team from './Team';
import About from './About';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Best in the country</div>
                <div class="masthead-heading text-uppercase">Admitted and treated 3000+ covid patients</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Book an appoinment</a>
            </div>
            </header>
            <Services/>
            <About/>
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;