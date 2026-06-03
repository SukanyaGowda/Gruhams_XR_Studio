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
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontWeight: 950, marginBottom: '0.8rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#444' }}>Full Name *</label>
                            <input
                                type="text"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1.2rem 1.5rem',
                                    borderRadius: '12px',
                                    border: '2px solid #eee',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    outline: 'none',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                                onBlur={(e) => e.target.style.borderColor = '#eee'}
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontWeight: 950, marginBottom: '0.8rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#444' }}>Mobile number *</label>
                            <input
                                type="tel"
                                required
                                style={{
                                    width: '100%',
                                    padding: '1.2rem 1.5rem',
                                    borderRadius: '12px',
                                    border: '2px solid #eee',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    outline: 'none',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                                onBlur={(e) => e.target.style.borderColor = '#eee'}
                            />
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <label style={{ display: 'block', fontWeight: 950, marginBottom: '0.8rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#444' }}>Email *</label>
                            <div style={{ position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '1.2rem' }}>✉</span>
                                <input
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem 1.5rem 1.2rem 3.5rem',
                                        borderRadius: '12px',
                                        border: '2px solid #eee',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#D4AF37'}
                                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1.5rem',
                                borderRadius: '60px',
                                background: '#D4AF37',
                                color: '#000',
                                border: 'none',
                                fontSize: '1.2rem',
                                fontWeight: 950,
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 15px 35px rgba(50,205,50,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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
