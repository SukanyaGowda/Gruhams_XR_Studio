import React, { useState } from 'react';
import kitchenTopView from '../assets/studio_kitchen_top_view_1780402659062.png';

function License() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your interest! We will get back to you shortly regarding your consultation.');
    };

    const reviews = [
        {
            name: "Nookarajesh Varma Sangadi",
            date: "May 20, 2026",
            text: "This is such an amazing experience to go through plans",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Julie Parnell",
            date: "May 18, 2026",
            text: "What an amazing experience Lifesize Plans was to be able",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Vishesh Singh",
            date: "March 29, 2026",
            text: "An absolute must when building. We had been reviewing our",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    return (
        <div className="page license-page">
            {/* HERO SECTION */}
            <header className="license-hero" style={{
                position: 'relative',
                height: '350px',
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(${kitchenTopView})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: 950,
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '-2px',
                        textShadow: '0 5px 20px rgba(0,0,0,0.5)'
                    }}>
                        BECOME A LICENSEE
                    </h1>
                </div>
            </header>

            {/* VIDEO SECTION */}
            <section className="license-video-section" style={{ padding: '4rem 2rem', background: '#fff', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                        <iframe
                            src="https://www.youtube.com/embed/uWRlhNymh5s?autoplay=1&mute=1&controls=1&rel=0&start=5"
                            title="Gruhams XR Bangalore Showcase"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* SECURITY ALERT SECTION */}
            <section className="security-alert" style={{
                padding: '3rem 2rem',
                background: '#f8f9ff',
                textAlign: 'center',
                margin: '0 auto 2rem',
                maxWidth: '1200px',
                borderRadius: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '2.8rem',
                        fontWeight: 900,
                        color: '#000',
                        marginBottom: '2rem',
                        letterSpacing: '-1px'
                    }}>
                        Security Alert: For Safe Communications
                    </h2>
                    <div style={{
                        fontSize: '1.1rem',
                        color: '#555',
                        lineHeight: '1.8',
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontWeight: 500
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>We prioritize the privacy and security of our licensees, business partners, and prospective business partners.</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For all matters related to sales, management, and business support, we exclusively communicate through our official <strong>@lifesizeplans.com</strong> email addresses or via our partner company <strong>HEVN</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our appointed <strong>CTO – Barry Johnston</strong> will be your point of contact.
                        </p>
                        <p style={{ color: '#d9534f', fontWeight: 700 }}>
                            Please be aware: We will never request payments via chat platforms such as WhatsApp or Messenger.
                        </p>
                    </div>
                </div>
            </section>

            {/* LIFETIME LICENSING SECTION */}
            <section className="lifetime-licensing" style={{
                padding: '4rem 2rem',
                background: '#fff',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="pricing-title-area" style={{ position: 'relative', marginBottom: '2rem' }}>
                        <span className="plans-bg-text" style={{ fontSize: '10rem', opacity: 0.1 }}>LICENSE</span>
                        <h2 style={{
                            position: 'relative',
                            fontSize: '4rem',
                            fontWeight: 950,
                            color: '#000',
                            zIndex: 1,
                            textTransform: 'capitalize'
                        }}>
                            Lifetime Licensing
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                        gap: '4rem',
                        textAlign: 'left'
                    }}>
                        {/* Standard Lifetime Model */}
                        <div>
                            <p style={{
                                fontSize: '1.2rem',
                                color: '#444',
                                lineHeight: '1.7',
                                fontWeight: 500
                            }}>
                                Our Lifetime Licensing model requires a one-time upfront payment with no ongoing revenue share. The initial fee is determined based on key factors, including the potential number of facilities that can be supported in a given area, local population density, and the exclusivity of the territory requested.
                            </p>
                        </div>

                        {/* Master License Model */}
                        <div>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#444',
                                lineHeight: '1.7',
                                fontWeight: 500
                            }}>
                                <strong style={{ color: '#000', fontSize: '1.25rem', display: 'block', marginBottom: '0.8rem' }}>Master License:</strong>
                                A master licensing model grants an individual or organization the exclusive rights to operate and oversee our brand within a designated territory. As a master licensee, you will have the authority to sublicense our services to other operators in your area while maintaining consistency with our global standards.
                            </p>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#444',
                                lineHeight: '1.7',
                                fontWeight: 500,
                                marginTop: '1rem'
                            }}>
                                This model enables you to build a network of facilities under your supervision, supported by our comprehensive training, resources, and strategic guidance. In return, you'll benefit from a share of the revenue generated by your sublicensees, along with the advantage of leveraging our established brand reputation and support infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUPPORT SECTION */}
            <section className="license-support" style={{
                padding: '5rem 2rem',
                background: '#fcfcfc',
                textAlign: 'left',
                borderTop: '1px solid #eee'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 950,
                        color: '#000',
                        marginBottom: '1rem'
                    }}>
                        Support:
                    </h2>
                    <p style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: '#444',
                        marginBottom: '4rem'
                    }}>
                        Lifesize Plans provides comprehensive support to ensure the successful setup and operation of your facility. This includes:
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                        gap: '6rem'
                    }}>
                        {/* Column 1: Setup & Operations */}
                        <div>
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>1. Pre-Installation Guidance:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Expert consultation on facility design, layout, and equipment selection to maximize efficiency and functionality.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Assistance with site assessments and technical specifications to meet your unique requirements.
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>2. Installation and Setup:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Full installation of projection systems, software, and equipment by our specialized team.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Calibration and testing to ensure seamless functionality and precision.
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>3. Training:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Hands-on training for your staff in operating projection systems, managing software, and delivering customer experiences.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Access to online resources, tutorials, and guides for ongoing skill enhancement.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>4. Technical Support:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Dedicated global support team available to assist with troubleshooting, maintenance, and software updates.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Regular system check-ups and access to advanced support plans if required.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Growth & Collaboration */}
                        <div>
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>1. Growth Support:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Access to marketing materials, branding assets, and strategies to drive business growth in your area.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Inclusion in global campaigns to enhance visibility and attract customers.
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>2. Ongoing Collaboration:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        A global network of partners to share insights, best practices, and innovations.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Continuous improvements in technology and operations, delivered via software updates and system upgrades.
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>3. Marketing:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Marketing SLA available tailored to each step of your journey and budget.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Brand vision and unified brand language, with a centralised website and social media management platform.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', color: '#000' }}>4. Technology and Creative Services:</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        A central creative hub for partners to sell 3d rendering, CAD architectural plans and design services.
                                    </li>
                                    <li style={{ fontSize: '1.1rem', color: '#555', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: '#D4AF37' }}>•</span>
                                        Group discounts on technology upgrades and service level agreements for global tech support.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EQUIPMENT COSTS SECTION */}
            <section className="equipment-costs" style={{
                padding: '4rem 2rem',
                background: '#fff',
                textAlign: 'left'
            }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: '#000',
                        marginBottom: '1.5rem',
                        fontFamily: 'inherit'
                    }}>
                        Equipment Costs for a Lifesize Plans Facility:
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#555',
                        marginBottom: '2.5rem',
                        lineHeight: '1.6'
                    }}>
                        The equipment costs for establishing a Lifesize Plans facility will depend on the size, location, and specific requirements of the facility. Below is a breakdown of typical costs:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            {
                                title: "1. Projection Systems:",
                                items: [
                                    "High-resolution projectors and lens systems capable of projecting lifesize, accurate plans.",
                                    "Cost: $150,000–$350,000, depending on the size and number of projections required."
                                ]
                            },
                            {
                                title: "2. Projection Surface:",
                                items: [
                                    "Vertical projection surfaces designed by us and constructed under our supervision by your local contractor.",
                                    "Floor space designed by us and levelled to provide a perfect blended image."
                                ]
                            },
                            {
                                title: "3. Computing and Software Systems:",
                                items: [
                                    "Powerful computers and software for rendering seamless image mapping."
                                ]
                            },
                            {
                                title: "4. Networking and Connectivity:",
                                items: [
                                    "High-speed internet, networking equipment, and data storage solutions to support real-time collaboration."
                                ]
                            },
                            {
                                title: "5. Furniture and Fit-Out:",
                                items: [
                                    "Ergonomic workstations, collaboration spaces, and client seating areas.",
                                    "Cost: $15,000–$50,000, depending on design and quality."
                                ]
                            },
                            {
                                title: "6. Lighting and Environmental Controls:",
                                items: [
                                    "Adjustable lighting systems to optimize projection clarity and reduce glare."
                                ]
                            },
                            {
                                title: "7. Additional Equipment:",
                                items: [
                                    "Optional tools such as VR headsets, touch-screen displays, and interactive tools for enhanced functionality.",
                                    "Cost: $10,000–$30,000."
                                ]
                            },
                            {
                                title: "8. Design and Deploy:",
                                items: [
                                    "Design of interior projection space and structural requirements by HEVN. Cost: $60,000 USD",
                                    "Deployment: Full integration and commissioning and training services by HEVN and LSP. Cost: $80,000, two weeks on site."
                                ]
                            }
                        ].map((cost, idx) => (
                            <div key={idx} style={{ marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#000', marginBottom: '0.8rem' }}>{cost.title}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1.5rem' }}>
                                    {cost.items.map((item, i) => (
                                        <li key={i} style={{
                                            fontSize: '1.1rem',
                                            color: '#555',
                                            marginBottom: '0.6rem',
                                            display: 'flex',
                                            gap: '12px',
                                            lineHeight: '1.5',
                                            alignItems: 'baseline'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                border: '1px solid #777',
                                                display: 'inline-block',
                                                flexShrink: 0,
                                                transform: 'translateY(-2px)'
                                            }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#000', marginBottom: '0.5rem' }}>
                            Estimated Total Cost: $650,000–$1,150,000, including licensing fees, depending on the facility’s size, location, and equipment specifications.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                            These figures provide a starting point and can be customized further based on your unique requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONSULTATION FORM SECTION */}
            <section className="consultation-form" style={{ padding: '5rem 2rem', background: '#fff', borderTop: '1px solid #eee' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 950, color: '#000', marginBottom: '1.5rem' }}>Book a consultation now</h2>
                    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', marginBottom: '3rem' }}>
                        We are transitioning to a lifetime licensing model, providing a unique opportunity for facilities to join us as LSP partners. As a partner, you'll benefit from our comprehensive global support, marketing expertise, and design services. Together, we foster a culture of collaboration, innovation, and success, backed by a unified, worldwide team dedicated to your growth. <strong>Due to the sheer number of enquiries, we currently charge $400 USD for a professional consultation.</strong>
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none' }}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none' }}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none' }}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>Contact number (incl. country code)</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    required
                                    style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none' }}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none' }}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 700, fontSize: '0.9rem', color: '#666' }}>Message (optional)</label>
                            <textarea
                                name="message"
                                style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: '1.1rem', outline: 'none', minHeight: '80px', resize: 'vertical' }}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                justifySelf: 'start',
                                background: '#000',
                                color: '#fff',
                                padding: '1.2rem 4rem',
                                borderRadius: '50px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </section>

            {/* GOOGLE REVIEWS SECTION (MATCHING SCREENSHOT) */}
            <section className="license-reviews" style={{ padding: '4rem 2rem 6rem', background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem',
                        marginBottom: '4rem'
                    }}>
                        {reviews.map((rev, idx) => (
                            <div key={idx} style={{
                                background: '#fff',
                                padding: '2.5rem',
                                borderRadius: '8px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}>
                                {/* Google Badge */}
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '2.5rem',
                                    background: '#34a853',
                                    color: '#fff',
                                    padding: '8px 4px',
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    borderRadius: '0 4px 4px 0',
                                    letterSpacing: '1px'
                                }}>
                                    Google
                                </div>

                                <div style={{ paddingLeft: '20px' }}>
                                    {/* Stars */}
                                    <div style={{ color: '#fbbc04', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                        ★★★★★
                                    </div>

                                    {/* Review Text */}
                                    <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                                        {rev.text} <span style={{ color: '#007bff', cursor: 'pointer' }}>Read more</span>
                                    </p>

                                    {/* Reviewer Details */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: 'auto' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src={rev.image}
                                                alt={rev.name}
                                                style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                            {/* Google G icon overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                background: '#fff',
                                                borderRadius: '50%',
                                                padding: '2px',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                            }}>
                                                <div style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    background: '#ea4335',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '10px',
                                                    color: '#fff',
                                                    fontWeight: 900
                                                }}>G</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#000' }}>{rev.name}</h4>
                                            <p style={{ fontSize: '0.85rem', color: '#888', margin: '4px 0 0' }}>{rev.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button style={{
                            background: '#000',
                            color: '#fff',
                            padding: '0.8rem 2.5rem',
                            borderRadius: '8px',
                            border: 'none',
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontSize: '1rem',
                            letterSpacing: '0.5px'
                        }}>
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default License;
