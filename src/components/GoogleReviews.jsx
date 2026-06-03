import React from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const GoogleReviews = () => {
    const reviews = [
        {
            name: "Nookarajesh Varma Sangadi",
            text: "This is such an amazing experience to go through plans. It was incredibly helpful to see the layout in full scale before we started building.",
            date: "May 20, 2026",
            img: avatar1
        },
        {
            name: "Julie Parnell",
            text: "What an amazing experience Lifesize Plans was to be able to walk through our future home. The team was so professional and the technology is mind-blowing.",
            date: "May 18, 2026",
            img: avatar2
        },
        {
            name: "Vishesh Singh",
            text: "An absolute must when building. We had been reviewing our plans for months but seeing it at 1:1 scale changed everything for us. Highly recommend!",
            date: "March 29, 2026",
            img: avatar3
        }
    ];

    return (
        <section className="reviews-section-v2">
            <div className="container">
                <div className="reviews-top-stars-left">
                    <p>hundreds of 5 star Google reviews</p>
                    <div className="stars-large">★★★★★</div>
                </div>

                <div className="reviews-divider"></div>
                <h2 className="reviews-main-title" style={{ color: '#D4AF37' }}>Trusted by 5,000+ clients since 2016.</h2>
                <div className="reviews-divider"></div>

                <div className="reviews-grid-v2">
                    {reviews.map((r, i) => (
                        <div key={i} className="review-card-v2">
                            <div className="review-google-side" style={{ background: '#D4AF37' }}>Google</div>
                            <div className="review-content-v2">
                                <div className="review-stars-small">5.0 ★★★★★</div>
                                <p className="review-text-v2">{r.text} <span className="read-more-link">Read more</span></p>

                                <div className="review-user-v2">
                                    <div className="avatar-wrapper">
                                        <img src={r.img} alt={r.name} className="review-avatar-v2" />
                                        <div className="orange-star-badge" style={{ background: '#D4AF37' }}>★</div>
                                    </div>
                                    <div className="review-user-info">
                                        <div className="review-user-name">{r.name}</div>
                                        <div className="review-user-date">{r.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a
                        href="https://www.google.com/search?q=Gruhams_XR_Studio+Reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: '#000',
                            color: '#D4AF37',
                            padding: '1.2rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: 900,
                            borderRadius: '50px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            border: '1px solid #D4AF37'
                        }}
                    >
                        READ MORE REVIEWS ON GOOGLE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
