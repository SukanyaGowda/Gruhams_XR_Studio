import React, { useState, useEffect, useRef } from 'react';
import coupleImg from '../assets/callback-couple.png';

const reviews = [
    {
        name: "Karen Prins",
        text: "Following our recent walkthrough appointment we identified several areas where the current floorplan could be refined to further enhance functionality, flow and privacy across the home.",
        date: "4 months ago",
        avatar: "K",
        color: "#2e7d32"
    },
    {
        name: "Michelle",
        text: "An Incredible Experience - A Must for Anyone Building a Home! Seeing our house plans come to life at Gruhams XR was an eye-opening experience and truly worth every penny.",
        date: "a year ago",
        avatar: "https://i.pravatar.cc/150?u=michelle",
        color: "#ff6d00"
    },
    {
        name: "Belinda Patlidanovski",
        text: "The best decision we made. We got to really envision and see our home. This was so helpful in finalising our floor plans. You were very informative and knowledgeable.",
        date: "3 months ago",
        avatar: "B",
        color: "#01579b"
    },
    {
        name: "Peter O'Hehir",
        text: "We had a wonderful experience walking through the design and floor plan of our new home to be. It was extremely helpful in picking up some improvements and changes.",
        date: "4 months ago",
        avatar: "P",
        color: "#5d4037"
    },
    {
        name: "Engelina Boers",
        text: "It was lovely to meet the team at our walkthrough, they are professional from start to finish. Very knowledgeable with great ideas to enable a connection and 'feel' to our home.",
        date: "3 months ago",
        avatar: "E",
        color: "#1565c0"
    },
    {
        name: "David Smith",
        text: "Exceptional service! The XR technology is a game-changer. We caught several design flaws that would have cost us thousands of dollars if we had waited until construction.",
        date: "2 months ago",
        avatar: "D",
        color: "#d32f2f"
    }
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // We want to show 2 cards at a time on desktop
    const itemsToShow = 2;
    const maxIndex = reviews.length - itemsToShow;

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
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#000', marginTop: '0.5rem' }}>We're Rated 4.9 Stars on Google!</h2>
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
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="review-card-item"
                                    style={{
                                        flex: `0 0 calc(${100 / itemsToShow}% - 1rem)`,
                                        background: '#fff',
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                                        border: '1px solid #f5f5f5',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '380px'
                                    }}
                                >
                                    <div className="card-top">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                {review.avatar.length === 1 ? (
                                                    <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: review.color, color: '#fff', fontSize: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        {review.avatar}
                                                    </div>
                                                ) : (
                                                    <img src={review.avatar} alt={review.name} style={{ width: '55px', height: '55px', borderRadius: '50%' }} />
                                                )}
                                                <div>
                                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0 }}>{review.name}</h3>
                                                    <p style={{ color: '#888', fontSize: '0.8rem', margin: '2px 0' }}>{review.date}</p>
                                                    <div style={{ color: '#ffc107', fontSize: '0.9rem' }}>★★★★★</div>
                                                </div>
                                            </div>
                                            <div style={{ color: '#4285F4', fontSize: '1.2rem', fontWeight: 900 }}>G</div>
                                        </div>
                                        <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: '1.7', fontWeight: 500 }}>
                                            "{review.text}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrows below the scrolling cards */}
                        <div className="carousel-nav-arrows" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', paddingLeft: '1rem' }}>
                            <button
                                onClick={handlePrev}
                                style={{
                                    background: '#fff',
                                    border: '1px solid #ddd',
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}
                            >
                                ‹
                            </button>
                            <button
                                onClick={handleNext}
                                style={{
                                    background: '#fff',
                                    border: '1px solid #ddd',
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
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
