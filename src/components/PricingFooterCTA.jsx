import React from 'react';

const PricingFooterCTA = () => {
    return (
        <section className="pricing-footer-cta" style={{ padding: '2rem 0', background: '#fff' }}>
            <div className="container">
                <div style={{ borderTop: '2px solid #333', borderBottom: '2px solid #333', padding: '4rem 0', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                        <a
                            href="mailto:gruhams@gmail.com"
                            className="green-pill-btn"
                            style={{
                                background: '#00D600',
                                color: '#fff',
                                padding: '0.6rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 900,
                                fontSize: '0.9rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textTransform: 'uppercase',
                                border: '1px solid #000',
                                width: 'fit-content'
                            }}
                        >
                            <span style={{ fontSize: '1.1rem' }}>✉</span> MORE INFO
                        </a>

                        <a
                            href="tel:0411534010"
                            className="green-pill-btn"
                            style={{
                                background: '#00D600',
                                color: '#fff',
                                padding: '0.6rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 900,
                                fontSize: '0.9rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textTransform: 'uppercase',
                                border: '1px solid #000',
                                width: 'fit-content'
                            }}
                        >
                            <span style={{ fontSize: '1.1rem' }}>📞</span> CALL
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingFooterCTA;
