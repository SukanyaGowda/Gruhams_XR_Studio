import React from 'react';

function BookNow() {
    return (
        <div className="page" style={{ padding: '12rem 4rem 8rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#D4AF37', textTransform: 'uppercase' }}>Book Your Walkthrough</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '800px', margin: '2rem auto', fontWeight: 700 }}>
                Experience your future home before construction begins. Select a location and session time to get started.
            </p>

            <div style={{ marginTop: '4rem' }}>
                <button className="gold-button-pill shadow-btn large">
                    <span className="btn-icon">📅</span> OPEN BOOKING SYSTEM
                </button>
            </div>

            <div style={{ marginTop: '6rem', padding: '4rem', background: '#f9f9f9', borderRadius: '24px', border: '1px solid #eee' }}>
                <h2 style={{ fontWeight: 900, marginBottom: '1rem' }}>Booking Calendar</h2>
                <p style={{ fontWeight: 700, opacity: 0.7 }}>Secure your 1:1 scale walkthrough session today.</p>
            </div>
        </div>
    );
}

export default BookNow;
