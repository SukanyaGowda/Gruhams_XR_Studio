import React from 'react';

const PricingSocialProof = () => {
    return (
        <section className="pricing-social-proof" style={{ padding: '2rem 0', background: '#fff' }}>
            <div className="container">
                {/* Video First */}
                <div className="callout-video-main" style={{ marginBottom: '2rem' }}>
                    <div className="video-aspect-ratio" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.youtube.com/embed/e_w_OJaHtvY?autoplay=1&mute=1&controls=1&loop=1&playlist=e_w_OJaHtvY&modestbranding=1&rel=0"
                            title="Gruhams XR Studio Experience"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Google Reviews Second - One Row */}
                <div className="reviews-top-stars-left" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>hundreds of 5 star Google reviews</p>
                    <div className="stars-large" style={{ fontSize: '2rem', color: '#ffb700' }}>★★★★★</div>
                </div>

                <div className="reviews-grid-v2" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        {
                            name: "Nookarajesh Varma Sangadi",
                            text: "This is such an amazing experience to go through plans",
                            date: "May 20, 2026",
                            img: "https://i.pravatar.cc/150?u=nooka"
                        },
                        {
                            name: "Julie Parnell",
                            text: "What an amazing experience Lifesize Plans was to be able",
                            date: "May 18, 2026",
                            img: "https://i.pravatar.cc/150?u=julie"
                        },
                        {
                            name: "Vishesh Singh",
                            text: "An absolute must when building. We had been reviewing our",
                            date: "March 29, 2026",
                            img: "https://i.pravatar.cc/150?u=vishesh"
                        }
                    ].map((r, i) => (
                        <div key={i} className="review-card-v2" style={{ flex: '1 1 280px', maxWidth: '350px', minWidth: '280px', textAlign: 'left', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                            <div className="review-google-side" style={{ background: '#28a745', color: '#fff', padding: '0.8rem 0.4rem', writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontWeight: 800, textAlign: 'center', fontSize: '0.8rem' }}>Google</div>
                            <div className="review-content-v2" style={{ padding: '1rem' }}>
                                <div className="review-stars-small" style={{ color: '#ffb700', fontWeight: 800, marginBottom: '0.5rem', fontSize: '0.8rem' }}>5.0 ★★★★★</div>
                                <p className="review-text-v2" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.8rem' }}>{r.text} <span className="read-more-link" style={{ color: '#007bff', cursor: 'pointer', fontSize: '0.8rem' }}>Read more</span></p>
                                <div className="review-user-v2" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <img src={r.img} alt={r.name} style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                                    <div>
                                        <div className="review-user-name" style={{ fontWeight: 900, fontSize: '0.75rem' }}>{r.name}</div>
                                        <div className="review-user-date" style={{ fontSize: '0.65rem', color: '#888' }}>{r.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <a
                        href="https://www.google.com/search?q=Gruhams_XR_Studio+Reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-button-pill"
                        style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
                    >
                        READ MORE REVIEWS ON GOOGLE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSocialProof;
