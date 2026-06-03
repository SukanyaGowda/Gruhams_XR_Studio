import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import studioTopView from '../assets/architect_studio_top_view_1780401810015.png';
import groupStudioImg from '../assets/architect_group_studio_1780402261770.png';
import kitchenTopView from '../assets/studio_kitchen_top_view_1780402659062.png';
import blueprintBg from '../assets/blueprint-bg.png';

function Architects() {
    const mediaLogosUrl = "https://web.archive.org/web/20251105111512im_/https://lifesizeplans.com.au/wp-content/uploads/2024/01/In-the-media.png";
    const [openFaq, setOpenFaq] = useState(1);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    const reviews = [
        {
            id: 1,
            author: "Nookarajesh Varma Sangadi",
            date: "May 20, 2026",
            rating: 5,
            text: "This is such an amazing experience to go through plans. It was incredibly helpful to see the layout in full scale before we started building.",
            avatar: "https://ui-avatars.com/api/?name=Nookarajesh+Varma+Sangadi&background=random"
        },
        {
            id: 2,
            author: "Julie Parnell",
            date: "May 18, 2026",
            rating: 5,
            text: "What an amazing experience Lifesize Plans was to be able to walk through our future home. The team was so professional and the technology is mind-blowing.",
            avatar: "https://ui-avatars.com/api/?name=Julie+Parnell&background=random"
        },
        {
            id: 3,
            author: "Vishesh Singh",
            date: "March 29, 2026",
            rating: 5,
            text: "An absolute must when building. We had been reviewing our plans for months but seeing it at 1:1 scale changed everything for us. Highly recommend!",
            avatar: "https://ui-avatars.com/api/?name=Vishesh+Singh&background=random"
        }
    ];

    const faqs = [
        {
            question: "What type of file should I bring?",
            answer: "We primarily work with high-resolution PDF plans. For the best experience, please ensure your files are to scale and include all relevant layout details."
        },
        {
            question: "Can you make modifications on site?",
            answer: "Yes, we can give you access to our system so that you can rectify your plans according to your customers' demand."
        },
        {
            question: "Do I need to make an appointment?",
            answer: "Yes, sessions are by appointment only to ensure you have exclusive use of our studio and the full attention of our technicians."
        }
    ];

    return (
        <div className="page architects">
            {/* HERO SECTION WITH VIDEO */}
            <header className="hero">
                <div className="video-background">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/uWRlhNymh5s?autoplay=1&mute=1&controls=0&loop=1&playlist=uWRlhNymh5s&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1&start=5"
                        title="Architects and Builders Background Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6.5rem 2rem', textAlign: 'center' }}>
                    <h1 style={{ color: '#fff', fontSize: '4rem', fontWeight: 950, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>Architects + Builders</h1>
                    <p className="subtitle" style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        The ultimate pre-construction risk protection system for your clients.
                    </p>
                </div>
            </header>

            {/* SECTION 1: Transform Client Doubts */}
            <section className="transformation-section" style={{ padding: '4rem 2rem', background: '#fff', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 950, color: '#000', marginBottom: '2rem', letterSpacing: '-0.5px' }}>
                        Transform Client Doubts into Lifesize Certainty
                    </h2>
                    <div style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', fontWeight: 600, maxWidth: '850px', margin: '0 auto' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Unlock a new dimension of architectural and design presentations with Lifesize Plans. Our patented technology projects your plans on a true 1:1 scale, providing an unparalleled walkthrough experience for new constructions, renovations, or commercial ventures.
                        </p>
                        <p>
                            Offer your clients the ability to fully visualise and engage with your project, eliminating uncertainty and fostering decisive action. Our immersive experience reduces alterations during construction and amplifies client satisfaction, setting your services apart.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Partner Discounts & Logos */}
            <section className="partnership-section" style={{ padding: '4rem 2rem', background: '#fcfcfc', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 950, color: '#000', marginBottom: '2rem', letterSpacing: '-0.5px' }}>
                        Partner with Purpose: Exclusive Volume Discounts
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', fontWeight: 600, maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
                        Lifesize Plans values the collaborative spirit of the industry. We extend exclusive partnership pricing, reflecting our commitment to your volume-based needs and enhancing the profitability of your projects.
                    </p>

                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '2rem', opacity: 0.6 }}>TRUSTED BY INDUSTRY LEADERS</h3>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={mediaLogosUrl}
                                alt="As seen in Shark Tank, Financial Review, Better Homes"
                                style={{ maxWidth: '800px', width: '100%', height: 'auto', opacity: 0.8 }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Feature Cards */}
            <section className="architect-features" style={{ padding: '4rem 2rem', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                        {/* Card 1 */}
                        <div style={{ background: '#fff', padding: '4rem 2.5rem', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>✒️</div>
                            <h3 style={{ fontSize: '1.7rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem', lineHeight: '1.2' }}>Interactive Design Tools for Lifesize Planning</h3>
                            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: '1.7', fontWeight: 500 }}>
                                Our facility comes equipped with movable furniture, modular partitions, and full-scale models, enabling you and your clients to test drive every aspect of the design. Visualise the fit of a car in a garage or rearrange a living space, all in true scale.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div style={{ background: '#fff', padding: '4rem 2.5rem', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>⚖️</div>
                            <h3 style={{ fontSize: '1.7rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem', lineHeight: '1.2' }}>Maximise Efficiency, Minimise Construction Costs</h3>
                            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: '1.7', fontWeight: 500 }}>
                                In mere minutes with Lifesize Plans, identify and address potential design modifications that could later result in significant expenses. Spend time perfecting the plans, not correcting costly post-construction oversights.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div style={{ background: '#fff', padding: '4rem 2.5rem', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>↗️</div>
                            <h3 style={{ fontSize: '1.7rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem', lineHeight: '1.2' }}>A Seamless Extension of Your Design Process</h3>
                            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: '1.7', fontWeight: 500 }}>
                                We respect your workflow, requiring only a simple PDF to project your designs in high fidelity. Make instantaneous adjustments with our accessible system, based on real-time client feedback.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 4: Make Planning Simpler */}
            <section className="simpler-planning-section" style={{
                position: 'relative',
                padding: '4rem 2rem',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%), url(${studioTopView})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '3.8rem', fontWeight: 950, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Make Planning Your Projects Simpler
                    </h2>
                    <p style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: '1.6', marginBottom: '3rem', opacity: 1, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Let's work out how to streamline your projects by incorporating Lifesize Plans' full scale walkthroughs into your design presentations.
                    </p>
                    <Link to="/callback" className="lime-button-pill" style={{
                        display: 'inline-block',
                        background: '#D4AF37',
                        color: '#000',
                        fontSize: '1.2rem',
                        fontWeight: 950,
                        padding: '1.2rem 3.5rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        boxShadow: '0 10px 25px rgba(50,205,50,0.4)',
                        transition: 'transform 0.3s ease'
                    }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        GET IN TOUCH
                    </Link>
                </div>
                {/* Dots */}
                <div style={{ position: 'absolute', top: '60px', left: '80px', opacity: 0.3, fontSize: '3.5rem', color: '#fff', letterSpacing: '10px', lineHeight: '0.8' }}>•••••<br />•••••<br />•••••</div>
            </section>

            {/* SECTION 5: Full-Size Solutions */}
            <section className="solutions-impact-section" style={{ padding: '5rem 2rem', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '400px' }}>
                        <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                            <img src={groupStudioImg} alt="Group collaborating in studio" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                    <div style={{ flex: '1', minWidth: '400px' }}>
                        <h2 style={{ fontSize: '3.2rem', fontWeight: 950, color: '#000', marginBottom: '3rem', lineHeight: '1.1' }}>
                            Full-Size Solutions for Full-Scale Impact
                        </h2>

                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div style={{ fontSize: '2rem', marginTop: '5px' }}>👥</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 950, marginBottom: '0.5rem' }}>Collaborate in Full Scale</h3>
                                <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500, lineHeight: '1.6' }}>
                                    Convene all project contributors for a full-size session that promotes shared understanding and decision-making.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div style={{ fontSize: '2rem', marginTop: '5px' }}>🎯</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 950, marginBottom: '0.5rem' }}>Guide Client Choices</h3>
                                <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500, lineHeight: '1.6' }}>
                                    Use full-scale walkthroughs to help clients select from a range of property offerings with confidence.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ fontSize: '2rem', marginTop: '5px' }}>🤝</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 950, marginBottom: '0.5rem' }}>Localised Expertise</h3>
                                <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500, lineHeight: '1.6' }}>
                                    Delegate the fine-tuning to us and benefit from our management of the details right here in our studio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Google Reviews Grid */}
            <section className="reviews-grid-section" style={{ padding: '4rem 2rem', background: '#fcfcfc', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {reviews.map(review => (
                            <div key={review.id} style={{ background: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', textAlign: 'left', position: 'relative', border: '1px solid #eee' }}>
                                <div style={{ position: 'absolute', top: '0', left: '0', background: '#D4AF37', color: '#fff', padding: '5px 12px', fontSize: '0.8rem', fontWeight: 900, borderTopLeftRadius: '15px', borderBottomRightRadius: '15px' }}>Google</div>
                                <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '1.5rem', marginTop: '1rem' }}>{"★".repeat(review.rating)}</div>
                                <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: '1.6', marginBottom: '2rem', fontWeight: 500 }}>"{review.text}" <span style={{ color: '#007bff', cursor: 'pointer' }}>Read more</span></p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <img src={review.avatar} alt={review.author} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 950, marginBottom: '0.2rem' }}>{review.author}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#888', fontWeight: 600 }}>{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button style={{ background: '#000', color: '#fff', fontSize: '1rem', fontWeight: 900, padding: '1rem 3rem', borderRadius: '10px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>Load More</button>
                </div>
            </section>

            {/* SECTION 7: FAQ */}
            <section className="faq-section" style={{ padding: '5rem 2rem', background: '#fff', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', opacity: 0.6 }}>FREQUENTLY ASKED QUESTIONS</h4>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 950, color: '#000', marginBottom: '4rem' }}>Your Questions Answered</h2>
                    <div style={{ textAlign: 'left' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                <div onClick={() => toggleFaq(index)} style={{ background: '#f8f8f8', padding: '1.8rem 2.5rem', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>{faq.question}</h3>
                                    <span>{openFaq === index ? '✕' : '⌵'}</span>
                                </div>
                                {openFaq === index && <div style={{ padding: '2rem 3rem', fontSize: '1.15rem', color: '#555', lineHeight: '1.7', fontWeight: 500 }}>{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: Final Transformation */}
            <section className="final-transformation-cta" style={{
                position: 'relative',
                padding: '4rem 2rem',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%), url(${blueprintBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container" style={{ maxWidth: '950px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: 950, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-2px', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }}>
                        Improve Client Satisfaction Now
                    </h2>
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: '1.6', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                        Eliminate client uncertainty and foster decisive action by making Lifesize Plans part of your design process.
                    </p>
                    <Link to="/callback" className="lime-button-pill" style={{
                        display: 'inline-block',
                        background: '#D4AF37',
                        color: '#000',
                        fontSize: '1.3rem',
                        fontWeight: 950,
                        padding: '1.4rem 4rem',
                        borderRadius: '60px',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        boxShadow: '0 15px 40px rgba(50,205,50,0.5)',
                        transition: 'all 0.3s ease'
                    }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        CONTACT US TO DISCUSS WORKING TOGETHER
                    </Link>
                </div>
                {/* Dots Decoration */}
                <div style={{ position: 'absolute', top: '80px', left: '100px', opacity: 0.35, fontSize: '4.5rem', color: '#fff', letterSpacing: '15px', lineHeight: '0.8', fontWeight: 100 }}>•••••<br />•••••<br />•••••</div>
            </section>
        </div>
    );
}

export default Architects;
