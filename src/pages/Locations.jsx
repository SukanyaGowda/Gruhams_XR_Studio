import React from 'react';
import { Link } from 'react-router-dom';
import kitchenTopView from '../assets/studio_kitchen_top_view_1780402659062.png';

function Locations() {
    const locations = [
        {
            city: "Bangalore",
            address: "Sree Sai heights, 3rd floor, ideal home town ship, Rajarajeshwari Nagar, Bangalore - 560098",
            status: "FLAGSHIP STUDIO",
            phone: "+91 99000 00000",
            email: "info@gruhams.com",
            isLive: true
        },
        {
            city: "Mumbai",
            address: "Strategic Location Coming Soon",
            status: "UNDER DEVELOPMENT",
            isLive: false
        },
        {
            city: "Hyderabad",
            address: "Studio Design In Progress",
            status: "COMMING SOON",
            isLive: false
        }
    ];

    return (
        <div className="page locations-page">
            {/* HERO SECTION WITH VIDEO */}
            <header className="locations-hero" style={{
                position: 'relative',
                height: '500px',
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(${kitchenTopView})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: 950,
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '-2px',
                        textShadow: '0 5px 20px rgba(0,0,0,0.5)'
                    }}>
                        LOCATIONS
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        color: '#fff',
                        fontWeight: 700,
                        maxWidth: '700px',
                        margin: '1rem auto 0',
                        opacity: 0.9
                    }}>
                        Experience the world's most advanced 1:1 scale planning studio near you.
                    </p>
                </div>
            </header>

            {/* LOCATION CARDS SECTION */}
            <section className="locations-list" style={{ padding: '6rem 2rem', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="pricing-title-area" style={{ position: 'relative', marginBottom: '4rem' }}>
                        <span className="plans-bg-text" style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', opacity: 0.1 }}>CITIES</span>
                        <h2 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 950, color: '#000', textAlign: 'center', marginBottom: '2rem' }}>OUR STUDIOS</h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '3rem'
                    }}>
                        {locations.map((loc, i) => (
                            <div key={i} style={{
                                background: loc.isLive ? '#fff' : '#f9f9f9',
                                padding: '4rem 3rem',
                                borderRadius: '40px',
                                boxShadow: loc.isLive ? '0 30px 60px rgba(0,0,0,0.08)' : 'none',
                                border: loc.isLive ? '1px solid #f0f0f0' : '1px dashed #ddd',
                                textAlign: 'left',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Status Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1.2rem',
                                    background: loc.isLive ? '#D4AF37' : '#eee',
                                    color: loc.isLive ? '#fff' : '#888',
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    fontWeight: 900,
                                    letterSpacing: '1px',
                                    marginBottom: '2rem',
                                    alignSelf: 'flex-start'
                                }}>
                                    {loc.status}
                                </div>

                                <h3 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                                    fontWeight: 950,
                                    color: loc.isLive ? '#000' : '#aaa',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-1px'
                                }}>
                                    {loc.city}
                                </h3>

                                <p style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    color: loc.isLive ? '#555' : '#bbb',
                                    marginBottom: '3rem',
                                    lineHeight: '1.7',
                                    minHeight: '4.5rem'
                                }}>
                                    {loc.address}
                                </p>

                                {loc.isLive ? (
                                    <div style={{ marginTop: 'auto' }}>
                                        <div style={{ marginBottom: '2.5rem' }}>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#aaa', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Phone</div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000' }}>{loc.phone}</div>
                                        </div>
                                        <button className="lime-button-pill" style={{
                                            width: '100%',
                                            background: '#000',
                                            color: '#D4AF37',
                                            padding: '1.2rem',
                                            borderRadius: '50px',
                                            border: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 900,
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            transition: 'all 0.3s'
                                        }} onMouseOver={(e) => {
                                            e.currentTarget.style.background = '#D4AF37';
                                            e.currentTarget.style.color = '#fff';
                                        }} onMouseOut={(e) => {
                                            e.currentTarget.style.background = '#000';
                                            e.currentTarget.style.color = '#D4AF37';
                                        }}>
                                            GET DIRECTIONS
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ marginTop: 'auto', textAlign: 'center', padding: '2rem', border: '2px dashed #eee', borderRadius: '20px' }}>
                                        <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ccc', textTransform: 'uppercase' }}>Coming Soon</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPANSION CALLOUT */}
            <section className="expansion-callout" style={{
                padding: '10rem 2rem',
                background: '#000',
                textAlign: 'center',
                color: '#fff'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 950, color: '#D4AF37', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                        Growing Globally
                    </h2>
                    <p style={{ fontSize: '1.3rem', fontWeight: 700, opacity: 0.8, lineHeight: '1.6', marginBottom: '3rem' }}>
                        We're on a mission to bring Lifesize Plans to every major city. Interested in bringing our patented technology to your region?
                    </p>
                    <Link to="/license" className="lime-button-pill" style={{
                        display: 'inline-block',
                        background: '#D4AF37',
                        color: '#000',
                        padding: '1.4rem 4rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: 950,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        boxShadow: '0 10px 30px rgba(50,205,50,0.3)'
                    }}>
                        BECOME A PARTNER
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Locations;
