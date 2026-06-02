import React from 'react';

const PricingConsultation = () => {
    return (
        <div className="pricing-consultation-wrapper">
            {/* No Floorplans Section */}
            <section className="no-floorplans-section" style={{ padding: '3rem 0', background: '#fff' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#D4AF37', textTransform: 'uppercase', marginBottom: '1rem' }}>NO FLOORPLANS YET?</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem' }}>contact our office for:</p>

                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        maxWidth: '900px',
                        margin: '0 auto 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        textAlign: 'left'
                    }}>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> New Single Storey</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> New Two Storey</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> Dual Occupancy</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> Granny Flat</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> Alteration & Addition Single Storey</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> Alteration & Addition two Storey</li>
                        <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>✓</span> Pool</li>
                    </ul>

                    <button className="gold-button-pill shadow-btn">
                        <span className="btn-icon">📞</span> CALL US
                    </button>
                </div>
            </section>

            {/* Conversion Title & List Section */}
            <section className="conversion-intro-section" style={{ padding: '3rem 0 2rem', background: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: '#D4AF37',
                        lineHeight: '1.1',
                        maxWidth: '1000px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Contact us to convert your floor plans into clear, accurate 3D models.
                    </h2>

                    <div className="conversion-section" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                        <ul className="conversion-list" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: '#D4AF37', fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>Walkable Mode</strong>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>Move through your design at full scale to understand spatial flow and proportions.</p>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: '#D4AF37', fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>Tabletop Mode</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Review and collaborate around the design quickly on a tablet or screen.</p>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: '#D4AF37', fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>Dollhouse View</strong>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>See the entire layout from above for instant context and orientation.</p>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: '#D4AF37', fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>Virtual Reality (VR)</strong>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>Step inside the project with an immersive virtual walkthrough of the finished space.</p>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: '#D4AF37', fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>On-Site Augmented Reality (AR)</strong>
                                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>Position the proposed building directly on the site before construction.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingConsultation;
