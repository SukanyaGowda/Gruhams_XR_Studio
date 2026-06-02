import React from 'react';
import './PricingHero.css';
import heroImg from '../assets/pricing-hero.png';

const PricingHero = () => {
    return (
        <section className="pricing-hero bare-hero">
            <div className="pricing-hero-bg-full">
                <img src={heroImg} alt="Planning" className="pricing-hero-img" />
                <div className="hero-dark-overlay"></div>
            </div>
        </section>
    );
};

export default PricingHero;
