import React from 'react';
import './PricingHero.css';
import heroImg from '../assets/pricing-hero.png';

const PricingHero = () => {
    return (
        <section className="pricing-hero bare-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <div className="pricing-hero-container">
                <img src={heroImg} alt="Pricing Hero" className="pricing-hero-img" />
                <div className="hero-overlay"></div>
            </div>
        </section>
    );
};

export default PricingHero;
