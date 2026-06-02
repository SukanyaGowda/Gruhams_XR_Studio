import React from 'react';

const PricingQuoteForm = () => {
    return (
        <section className="pricing-quote-section" style={{ padding: '4rem 0', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div className="quote-text-header" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000', marginBottom: '1rem' }}>
                        Or upload your plans below and we'll call you ASAP
                    </h2>
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, fontStyle: 'italic', color: '#333', margin: '0.5rem 0' }}>
                        the plans do not have to be 100% finalised –
                    </p>
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, fontStyle: 'italic', color: '#333', margin: '0.5rem 0' }}>
                        in fact, sharing draft plans allows you more opportunity
                    </p>
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, fontStyle: 'italic', color: '#333', margin: '0.5rem 0' }}>
                        to make necessary changes.
                    </p>
                </div>

                <div className="quote-form-container" style={{
                    background: '#fff',
                    padding: '3rem',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    textAlign: 'left'
                }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>Full Name *</label>
                            <input
                                type="text"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '50px',
                                    border: '1px dashed #ccc',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>Mobile number *</label>
                            <input
                                type="tel"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '50px',
                                    border: '1px dashed #ccc',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>Email *</label>
                            <div style={{ position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#666' }}>✉</span>
                                <input
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1rem 1rem 3rem',
                                        borderRadius: '50px',
                                        border: '1px dashed #ccc',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                borderRadius: '50px',
                                background: '#00D600',
                                color: '#fff',
                                border: 'none',
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                        >
                            GET YOUR PERSONALISED QUOTE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PricingQuoteForm;
