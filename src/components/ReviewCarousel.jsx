import React, { useState, useEffect } from 'react';
import coupleImg from '../assets/callback-couple.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const reviewsData = [
    {
        id: 1,
        author: "Nookarajesh Varma Sangadi",
        date: "May 20, 2026",
        rating: 5,
        text: "This is such an amazing experience to go through plans. It was incredibly helpful to see the layout in full scale before we started building.",
        avatar: avatar1
    },
    {
        id: 2,
        author: "Julie Parnell",
        date: "May 18, 2026",
        rating: 5,
        text: "What an amazing experience Lifesize Plans was to be able to walk through our future home. The team was so professional and the technology is mind-blowing.",
        avatar: avatar2
    },
    {
        id: 3,
        author: "Vishesh Singh",
        date: "March 29, 2026",
        rating: 5,
        text: "An absolute must when building. We had been reviewing our plans for months but seeing it at 1:1 scale changed everything for us. Highly recommend!",
        avatar: avatar3
    }
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // We want to show 2 cards at a time on desktop
    const itemsToShow = 2;
    const maxIndex = reviewsData.length - itemsToShow;

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
            setIsAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
            setIsAnimating(false);
        }, 500);
    };

    return (
        <section className="review-carousel-section" style={{ background: '#fff', padding: '6rem 2rem', width: '100%', overflow: 'hidden' }}>
            <div className="carousel-container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="carousel-header" style={{ textAlign: 'left', marginBottom: '3rem', paddingLeft: '5%' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#666', letterSpacing: '1px' }}>What our lifesizers say about us</p>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 950, color: '#000', marginTop: '0.5rem' }}>We're Rated 4.9 Stars on Google!</h2>
                </div>

                <div className="carousel-main-layout" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

                    {/* Fixed Image on Left */}
                    <div className="carousel-image-box" style={{ flex: '0 0 35%', maxWidth: '500px', display: 'block' }}>
                        <img
                            src={coupleImg}
                            alt="Happy couple in studio"
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>

                    {/* Scrolling Multi-Review Grid on Right */}
                    <div className="carousel-scroller-wrapper" style={{ flex: '1', overflow: 'hidden', position: 'relative' }}>
                        <div
                            className="review-cards-track"
                            style={{
                                display: 'flex',
                                gap: '2rem',
                                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                padding: '1rem'
                            }}
                        >
                            {reviewsData.map((review, i) => (
                                <div
                                    key={i}
                                    className="review-card-item"
                                    style={{
                                        flex: `0 0 calc(${100 / itemsToShow}% - 1rem)`,
                                        background: '#fff',
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 50px rgba(212,175,55,0.08)',
                                        border: '1px solid #f5f5f5',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '380px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        background: '#D4AF37',
                                        color: '#fff',
                                        padding: '6px 15px',
                                        fontSize: '0.75rem',
                                        fontWeight: 900,
                                        borderBottomRightRadius: '15px',
                                        textTransform: 'uppercase'
                                    }}>Google</div>

                                    <div className="card-top" style={{ marginTop: '1rem' }}>
                                        <div style={{ color: '#FFD700', fontSize: '1rem', marginBottom: '1.2rem' }}>★★★★★</div>
                                        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: '1.7', fontWeight: 500, marginBottom: '2rem' }}>
                                            "{review.text}" <span style={{ color: '#007bff', cursor: 'pointer', fontSize: '0.9rem' }}>Read more</span>
                                        </p>
                                    </div>

                                    <div className="card-bottom">
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={review.avatar} alt={review.author} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                                                <div style={{ position: 'absolute', bottom: -5, right: -5, background: '#D4AF37', color: '#fff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>★</div>
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0 }}>{review.author}</h3>
                                                <p style={{ color: '#888', fontSize: '0.85rem', margin: '4px 0' }}>{review.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrows below the scrolling cards */}
                        <div className="carousel-nav-arrows" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', paddingLeft: '1rem' }}>
                            <button
                                onClick={handlePrev}
                                style={{
                                    background: '#D4AF37',
                                    border: 'none',
                                    color: '#000',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    boxShadow: '0 5px 15px rgba(212,175,55,0.3)'
                                }}
                            >
                                ‹
                            </button>
                            <button
                                onClick={handleNext}
                                style={{
                                    background: '#D4AF37',
                                    border: 'none',
                                    color: '#000',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    boxShadow: '0 5px 15px rgba(212,175,55,0.3)'
                                }}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 1100px) {
                    .carousel-image-box { display: none; }
                    .carousel-header { padding-left: 0; text-align: center; }
                    .carousel-nav-arrows { justify-content: center; }
                }
                @media (max-width: 768px) {
                    .review-card-item { flex: 0 0 calc(100% - 1rem) !important; }
                }
            ` }} />
        </section>
    );
};

export default ReviewCarousel;
