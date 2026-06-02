import React from 'react';
import './PricingHero.css';
import heroImg from '../assets/pricing-hero.png';

const PricingHero = () => {
    return (
        <section className="pricing-hero bare-hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <div className="video-background" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Dyuy7D31mZ0?autoplay=1&mute=1&controls=0&loop=1&playlist=Dyuy7D31mZ0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1"
                    title="Background Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}></div>
            </div>
        </section>
    );
};

export default PricingHero;
