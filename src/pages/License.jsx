import React from 'react';

function License() {
    return (
        <div className="page" style={{ padding: '8rem 4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-green)' }}>Licensing & Franchise</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
                Bring Gruhams_XR_Studio to your region. Become a partner in the global expansion of patented pre-construction technology.
            </p>
            <div className="reviews-grid" style={{ marginTop: '4rem' }}>
                <div className="review-card" style={{ width: '100%', maxWidth: '400px' }}>
                    <h3>Patented Technology</h3>
                    <p>Access our world-first tracking and projection systems.</p>
                </div>
                <div className="review-card" style={{ width: '100%', maxWidth: '400px' }}>
                    <h3>Global Branding</h3>
                    <p>Join a network of studios across the globe.</p>
                </div>
            </div>
            <button className="green-button" style={{ marginTop: '4rem' }}>Enquire Now</button>
        </div>
    );
}


export default License;
