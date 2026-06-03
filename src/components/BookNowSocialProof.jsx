import React from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const BookNowSocialProof = () => {
    return (
        <section className="book-now-social-proof" style={{ padding: '4rem 0', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* 1. First Video (Clean Embed) */}
                <div className="video-item" style={{ marginBottom: '4rem' }}>
                    <div className="video-aspect-ratio" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.youtube.com/embed/uWRlhNymh5s?autoplay=1&mute=1&controls=0&loop=1&playlist=uWRlhNymh5s&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1&start=5"
                            title="Gruhams XR Studio Walkthrough"
                            style={{ position: 'absolute', top: '-60px', left: 0, width: '100%', height: 'calc(100% + 120px)', pointerEvents: 'none' }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* 2. Google Reviews Section */}
                <div className="reviews-top-stars-left" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>hundreds of 5 star Google reviews</p>
                    <div className="stars-large" style={{ fontSize: '2.5rem', color: '#ffb700', marginBottom: '2rem' }}>★★★★★</div>
                </div>

                <div className="reviews-grid-v2" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {[
                        {
                            name: "Venkatesh Prasad",
                            text: "Being able to see our layout at 1:1 scale in Bengaluru was unbelievable. It's the best investment we made for our project.",
                            date: "May 20, 2026",
                            img: avatar1
                        },
                        {
                            name: "Lakshmi Narayan",
                            text: "The walkthrough revealed that our kitchen was too tight. We fixed it instantly. Highly recommended for all home builders!",
                            date: "May 18, 2026",
                            img: avatar2
                        },
                        {
                            name: "Karthik Raja",
                            text: "Excellent service and technology. The accuracy of the floor plans is spot on. Worth every rupee.",
                            date: "March 29, 2026",
                            img: avatar3
                        }
                    ].map((r, i) => (
                        <div key={i} className="review-card-v2" style={{ flex: '1 1 300px', maxWidth: '380px', textAlign: 'left', border: '1px solid #eee', borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                            <div className="review-google-side" style={{ background: '#D4AF37', color: '#fff', padding: '1rem 0.6rem', writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontWeight: 800, textAlign: 'center', fontSize: '0.9rem', letterSpacing: '1px' }}>GOOGLE</div>
                            <div className="review-content-v2" style={{ padding: '1.5rem' }}>
                                <div className="review-stars-small" style={{ color: '#ffb700', fontWeight: 800, marginBottom: '0.8rem', fontSize: '1rem' }}>5.0 ★★★★★</div>
                                <p className="review-text-v2" style={{ fontSize: '1rem', fontWeight: 600, color: '#333', marginBottom: '1.5rem', lineHeight: '1.6' }}>{r.text} <span className="read-more-link" style={{ color: '#007bff', cursor: 'pointer', fontSize: '0.8rem' }}>Read more</span></p>
                                <div className="review-user-v2" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <img src={r.img} alt={r.name} style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <div>
                                        <div className="review-user-name" style={{ fontWeight: 900, fontSize: '0.9rem' }}>{r.name}</div>
                                        <div className="review-user-date" style={{ fontSize: '0.8rem', color: '#888' }}>{r.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <a
                        href="https://www.google.com/search?q=Gruhams_XR_Studio+Reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: '#000',
                            color: '#fff',
                            padding: '1.2rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: 900,
                            borderRadius: '50px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        }}
                    >
                        READ MORE REVIEWS ON GOOGLE
                    </a>
                </div>

                {/* 3. Second Video (Clean Embed) */}
                <div className="video-item" style={{ marginBottom: '2rem' }}>
                    <div className="video-aspect-ratio" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.youtube.com/embed/e_w_OJaHtvY?autoplay=1&mute=1&controls=0&loop=1&playlist=e_w_OJaHtvY&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1"
                            title="Gruhams XR Studio Experience"
                            style={{ position: 'absolute', top: '-60px', left: 0, width: '100%', height: 'calc(100% + 120px)', pointerEvents: 'none' }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookNowSocialProof;
