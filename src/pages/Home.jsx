import React from 'react';
import houseRender from '../assets/house-render.png';
import shrinivasReddy from '../assets/shrinivas-reddy.png';
import PricingCards from '../components/PricingCards';
import arDemoImg from '../assets/ar-demo.png';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
    const mediaLogosUrl = "https://web.archive.org/web/20251105111512im_/https://lifesizeplans.com.au/wp-content/uploads/2024/01/In-the-media.png";

    return (
        <div className="page home">
            <header className="hero">
                <div className="video-background">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Dyuy7D31mZ0?autoplay=1&mute=1&controls=0&loop=1&playlist=Dyuy7D31mZ0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1"
                        title="Background Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </header>

            <GoogleReviews />

            <section className="callout-section">
                <div className="container">
                    <div className="callout-content-top">
                        <h2 className="callout-headline-gold" style={{ color: '#D4AF37' }}>Build it right — before you build it.</h2>
                        <h3 className="callout-sub-gold" style={{ color: '#D4AF37' }}>Your pre-construction risk protection system</h3>

                        <div className="callout-description-bold">
                            <p>Experience your home at full scale with professional construction insight prior to build.</p>
                            <p>Variations introduced mid-construction can exceed $20,000+.</p>
                            <p>For most projects, our fee equates to approximately 0.1% of the total build investment — a considered safeguard for a significant financial commitment.</p>
                        </div>
                    </div>

                    <div className="callout-features-list">
                        <div className="callout-feature-vertical">
                            <div className="feature-icon-box">💻</div>
                            <div className="feature-text-box">
                                <h4>Expert Design Consultant</h4>
                                <p>Gain valuable insights with an expert design consultant who will accompany you throughout your walkthrough.</p>
                            </div>
                        </div>
                        <div className="callout-feature-vertical">
                            <div className="feature-icon-box">👁️</div>
                            <div className="feature-text-box">
                                <h4>Experience Every Dimension</h4>
                                <p>Step into the true-to-life scale of your home or commercial space and utilise moveable furniture and walls to make sure it is exactly as you imagined before work begins.</p>
                            </div>
                        </div>
                        <div className="callout-feature-vertical">
                            <div className="feature-icon-box">🏅</div>
                            <div className="feature-text-box">
                                <h4>Design Precision Guaranteed</h4>
                                <p>98% of clients refine their vision post-walkthrough — join them in perfecting your plans.</p>
                            </div>
                        </div>
                        <div className="callout-feature-vertical">
                            <div className="feature-icon-box">💰</div>
                            <div className="feature-text-box">
                                <h4>Prevent Budget Blowouts</h4>
                                <p>Sidestep the average $20,000+ cost of mid-construction changes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="callout-video-main">
                        <div className="video-aspect-ratio">
                            <iframe
                                src="https://www.youtube.com/embed/Dyuy7D31mZ0?autoplay=1&mute=1&controls=0&loop=1&playlist=Dyuy7D31mZ0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1"
                                title="Gruhams XR Studio Experience"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="callout-testimonial">
                        <p className="testimonial-quote-text">
                            "With Stefano's help we made changes that saved us thousands in building costs. The walkthrough exposed issues we never would've seen on paper."
                        </p>
                        <div className="testimonial-user">
                            <img src={shrinivasReddy} alt="Mr Shrinivas Reddy" className="testimonial-img-small" />
                            <div className="testimonial-info">
                                <strong>Mr Shrinivas Reddy</strong>
                                <span>Client - Bidadi, Karnataka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="remorse-section">
                <div className="remorse-image">
                    <img src={houseRender} alt="House Render" />
                </div>
                <div className="remorse-content">
                    <h2 style={{ color: '#D4AF37' }}>Eliminate Builder's Remorse</h2>
                    <div className="feature-item">
                        <div className="feature-icon">▢</div>
                        <div className="feature-text">
                            <h4>The Test-Drive for Your Build</h4>
                            <p>Ensure your plans match your dreams, avoiding the regrets that 90% of new builders face.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">◎</div>
                        <div className="feature-text">
                            <h4>Clarity Before Construction</h4>
                            <p>With our world-first patented technology, experience your project down to the smallest detail, for peace of mind and a regret-free future.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-section-wrapper">
                <div className="pricing-title-area">
                    <span className="plans-bg-text">PLANS</span>
                    <h2 className="pricing-main-title">Walk-Through Sessions</h2>
                </div>
                <PricingCards />
            </section>

            <section className="appointment-info-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="appointment-text-main-small">
                        appointments are allocated a two-hour window, with fees charged only for time used and any required design consultant.
                    </p>

                    <div style={{ marginTop: '2.5rem' }}>
                        <button className="gold-button-pill shadow-btn large">
                            <span className="btn-icon">✓</span> BOOK NOW
                        </button>
                    </div>
                </div>
            </section>

            <section className="no-floorplans-section">
                <div className="container">
                    <h2 className="section-title-bold-small" style={{ color: '#D4AF37' }}>NO FLOORPLANS YET?</h2>
                    <p className="section-subtitle-bold-small">we can help with designing – drafting & BASIX, or <u>full packages</u> for:</p>

                    <ul className="design-services-list-small">
                        <li>New Single Storey</li>
                        <li>New Two Storey</li>
                        <li>Dual Occupancy</li>
                        <li>Granny Flat</li>
                        <li>Alteration & Addition Single Storey</li>
                        <li>Alteration & Addition two Storey</li>
                        <li>Pool</li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <button className="gold-button-pill shadow-btn">
                            <span className="btn-icon">📞</span> CALL US
                        </button>
                    </div>
                </div>
            </section>

            <section className="ar-image-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <img src={arDemoImg} alt="AR Visualization" className="ar-demo-img" />
                </div>
            </section>

            <section className="conversion-section" style={{ background: '#fcfcfc', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <h2 className="conversion-title" style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '2rem' }}>Contact us to convert your floor plans into clear, accurate 3D models.</h2>

                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <button className="gold-button-pill shadow-btn">
                            <span className="btn-icon">📞</span> CALL US
                        </button>
                    </div>

                    <div style={{ marginBottom: '6rem' }}>
                        <ul className="conversion-list">
                            <li>
                                <strong style={{ color: '#D4AF37', fontSize: '1.5rem' }}>Walkable Mode</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Move through your design at full scale to understand spatial flow and proportions.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#D4AF37', fontSize: '1.5rem' }}>Tabletop Mode</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Review and collaborate around the design quickly on a tablet or screen.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#D4AF37', fontSize: '1.5rem' }}>Dollhouse View</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>See the entire layout from above for instant context and orientation.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#D4AF37', fontSize: '1.5rem' }}>Virtual Reality (VR)</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Step inside the project with an immersive virtual walkthrough of the finished space.</p>
                            </li>
                            <li>
                                <strong style={{ color: '#D4AF37', fontSize: '1.5rem' }}>On-Site Augmented Reality (AR)</strong>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Position the proposed building directly on the site before construction.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="modeling-grid">
                        <div className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Concept White 3D Model</h3>
                                <p className="m-price">$3.40 per sqm - Minimum $495 +GST</p>
                                <p className="m-desc">Simple roofs & standard layouts (Flat ceilings, multi-storey – not split level)</p>
                                <ul className="m-features">
                                    <li>• Clean white 3D model from PDF or CAD plans</li>
                                    <li>• Accurate walls, windows, doors, stairs and levels</li>
                                    <li>• Focus on space, layout and proportions</li>
                                    <li>• Ideal for early design stages.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Complex Concept White 3D Model</h3>
                                <p className="m-price">$4.00 per sqm - Minimum $595 +GST</p>
                                <p className="m-desc">Split levels, raking ceilings & complex roofs</p>
                                <ul className="m-features">
                                    <li>• Everything in the standard Concept White Model</li>
                                    <li>• Additional modelling for split levels and complex roof geometry</li>
                                    <li>• Suitable when layout is resolved but finishes are not.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Coloured / Textured 3D Model</h3>
                                <p className="m-price">$4.80 per sqm - Minimum $895 +GST</p>
                                <ul className="m-features">
                                    <li>• Coloured walls, roofs and floor finishes</li>
                                    <li>• Kitchens and bathrooms shown in simplified form</li>
                                    <li>• Furniture added for scale and clarity</li>
                                    <li>• Presentation-ready visuals</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="modeling-grid" style={{ marginTop: '3rem' }}>
                        <div className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Fully Styled / Custom 3D Model</h3>
                                <p className="m-price">$6.20 per sqm - Minimum $1,295 AUD</p>
                                <ul className="m-features">
                                    <li>• Custom colours and finishes to specification</li>
                                    <li>• Furniture, lighting and styling matched to the design intent</li>
                                    <li>• High-quality visuals suitable for marketing and sales use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Model Upgrades (from an existing model)</h3>
                                <ul className="m-features">
                                    <li>• Standard White → Coloured: $2.60 per sqm (min $395)</li>
                                    <li>• Coloured → Fully Styled: $3.40 per sqm (min $595) +GST</li>
                                </ul>
                            </div>
                        </div>
                        <div className="modeling-card">
                            <div className="modeling-icon-box">📱</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>Already have a 3D model?</h3>
                                <p className="m-price">Upload it to our partner's engine - From $300 +GST</p>
                                <p className="m-desc">Integrated via our partner’s visualisation engine, the tablet 3D walkthrough enhances spatial understanding, clarifies design intent and streamlines the approval process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="events-video-section" style={{ padding: '4rem 0', background: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#D4AF37', textTransform: 'uppercase', marginBottom: '1rem' }}>Host Your Next Event at Gruhams XR Studio</h2>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>A unique, immersive venue perfect for showcasing your brand.</p>
                    </div>

                    <div className="video-aspect-ratio" style={{ paddingBottom: '50%', marginBottom: '3rem' }}>
                        <iframe
                            src="https://www.youtube.com/embed/e_w_OJaHtvY?autoplay=1&mute=1&controls=0&loop=1&playlist=e_w_OJaHtvY&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1&start=8"
                            title="Event Hosting Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="events-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                        <div>
                            <h3 style={{ color: '#D4AF37', fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Ideal for:</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontWeight: 700, lineHeight: '1.8' }}>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Conferences & corporate events</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Product launches & media briefings</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Exhibitions & industry showcases</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Photoshoots & film productions</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Training sessions & workshops</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Networking events & presentations</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ color: '#D4AF37', fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Our team can assist with:</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', fontWeight: 700, lineHeight: '1.8' }}>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Catering coordination</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> PA and presentation systems</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Video & photography services</li>
                                <li><span style={{ color: '#D4AF37', marginRight: '10px' }}>•</span> Event layout and technical support</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>We can accommodate standing events, theatre-style presentations, or custom layouts.</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: 700, textDecoration: 'underline', marginBottom: '4rem' }}>Get in touch with our team to plan your next event.</p>

                        <div style={{ marginTop: '4rem', borderTop: '2px solid #eee', paddingTop: '6rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2 className="google-rating-title">We're Rated 4.9 Stars on Google!</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a
                                        href="https://www.google.com/search?q=Gruhams_XR_Studio+Reviews"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="google-reviews-cta"
                                        style={{
                                            background: '#000',
                                            color: '#D4AF37',
                                            border: 'none',
                                            borderRadius: '50px',
                                            padding: '1.3rem 3.5rem',
                                            fontSize: '1.4rem',
                                            fontWeight: 900,
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                                            textTransform: 'uppercase',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <span style={{ color: '#D4AF37', fontSize: '1.8rem' }}>🏅</span> READ OUR REVIEWS ON GOOGLE
                                    </a>
                                </div>
                            </div>

                            <div className="awards-branding-box">
                                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '3rem', textAlign: 'center' }}>Award-Winning Innovation and Service</h3>

                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
                                    <img
                                        src={mediaLogosUrl}
                                        alt="Featured In Media: Better Homes, Shark Tank, Financial Review, etc."
                                        style={{ maxWidth: '800px', width: '100%', height: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', paddingBottom: '1rem' }}>
                                    {[
                                        { title: 'Trailblazing Technology', text: 'Gruhams XR Studio is an original, world-first with our Innovative Patented Technology' },
                                        { title: 'Customer Satisfaction', text: 'With a 4.9/5 Google Rating, our commitment to your satisfaction is unmatched.' },
                                        { title: 'Industry Recognition', text: 'We\'re regularly featured in the media and winning awards for innovation.' },
                                        { title: 'Special Mention', text: 'As PropTech\'s Highest Achiever of the Year 2022, we\'re known for our innovation.' }
                                    ].map((award, idx) => (
                                        <div key={idx} style={{ background: '#fff', padding: '2rem 1.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 8px 15px rgba(0,0,0,0.04)', border: '1px solid #eee', flex: '0 1 280px' }}>
                                            <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>🏅</div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.6rem' }}>{award.title}</h3>
                                            <p style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.7, lineHeight: '1.4' }}>{award.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
