import React from 'react';
import finalRender from '../assets/final-render.png';

const PricingFinalImage = () => {
    return (
        <section className="pricing-final-image" style={{ padding: '1rem 0 3rem', background: '#fff' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <img
                    src={finalRender}
                    alt="Final Architectural Render"
                    style={{
                        maxWidth: '900px',
                        width: '95%',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        margin: '0 auto'
                    }}
                />
            </div>
        </section>
    );
};

export default PricingFinalImage;
