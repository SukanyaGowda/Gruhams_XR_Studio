import React from 'react';

function Callback() {
    return (
        <div className="page" style={{ padding: '8rem 4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-green)' }}>Request a Callback</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
                Have questions about our technology? Leave your details and one of our experts will be in touch shortly.
            </p>
            <form style={{ maxWidth: '600px', margin: '4rem auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="text" placeholder="Full Name" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                <input type="email" placeholder="Email Address" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                <input type="tel" placeholder="Phone Number" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                <textarea placeholder="Tell us about your project" style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', height: '150px' }}></textarea>
                <button className="green-button">Submit Request</button>
            </form>
        </div>
    );
}

export default Callback;
