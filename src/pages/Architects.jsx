import React from 'react';

function Architects() {
    return (
        <div className="page architects">
            <header className="page-header dark">
                <div className="container">
                    <h1 style={{ color: '#D4AF37' }}>Architects + Builders</h1>
                    <p className="subtitle">Empower your clients with the world's first 1:1 scale pre-construction experience.</p>
                </div>
            </header>

            <section className="info-section light">
                <div className="container">
                    <div className="solutions-intro">
                        <h2>Convert floor plans into 1:1 scale walkthroughs.</h2>
                        <p>Reduce risk, accelerate approvals, and eliminate design doubts.</p>
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card">
                            <div className="solution-icon" style={{ color: '#D4AF37' }}>✦</div>
                            <h3>Walkable Mode</h3>
                            <p>Understand spatial flow and proportions at full scale. Perfect for verifying kitchen clearances and room sizes.</p>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon" style={{ color: '#D4AF37' }}>✦</div>
                            <h3>Tabletop Mode</h3>
                            <p>Review and collaborate around the design quickly on a tablet or screen. Ideal for collaborative design meetings.</p>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon" style={{ color: '#D4AF37' }}>✦</div>
                            <h3>Dollhouse View</h3>
                            <p>See the entire layout from above for instant context and orientation of the building footprint.</p>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon" style={{ color: '#D4AF37' }}>✦</div>
                            <h3>Virtual / Augmented Reality</h3>
                            <p>Position the proposed building directly on site to assess scale and surroundings.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="no-floorplans-section">
                <div className="container">
                    <h2 className="section-title-bold-small">NO FLOORPLANS YET?</h2>
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
        </div>
    );
}

export default Architects;
