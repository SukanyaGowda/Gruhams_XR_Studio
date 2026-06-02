import React from 'react';

function Locations() {
    const locations = [
        {
            city: "Bangalore",
            address: "Sree Sai heights, 3rd floor, ideal home town ship, Rajarajeshwari Nagar, Bangalore - 560098",
            status: "Flagship Studio",
            phone: "+91 99000 00000",
            email: "gruhams@gmail.com"
        },
        { city: "Coming Soon", address: "Mumbai", status: "Waitlist" },
        { city: "Coming Soon", address: "Hyderabad", status: "Waitlist" }
    ];

    return (
        <div className="page locations-page">
            <header className="page-header dark" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div className="container">
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '-2px' }}>Our Locations</h1>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, opacity: 0.8 }}>Visit a Gruhams_XR_Studio near you to experience your project at 1:1 scale.</p>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '10rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                    {locations.map((loc, i) => (
                        <div key={i} className="location-card" style={{
                            background: '#fff',
                            padding: '3.5rem 2.5rem',
                            borderRadius: '30px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                            border: '1px solid #f0f0f0',
                            width: '100%',
                            maxWidth: '380px',
                            textAlign: 'left',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.3s'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '6px',
                                height: '100%',
                                background: loc.status === 'Flagship Studio' ? '#D4AF37' : '#eee'
                            }}></div>

                            <div style={{ color: '#D4AF37', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>
                                {loc.status}
                            </div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>{loc.city}</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.7, marginBottom: '2.5rem', minHeight: '4.5rem', lineHeight: '1.6' }}>{loc.address}</p>

                            {loc.phone && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 900, color: '#000', marginBottom: '0.3rem' }}>PHONE</p>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.8 }}>{loc.phone}</p>
                                </div>
                            )}

                            <button className="gold-button-pill" style={{ width: '100%', justifyContent: 'center' }}>
                                GET DIRECTIONS
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Locations;
