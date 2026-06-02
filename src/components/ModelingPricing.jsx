import React from 'react';

const ModelingPricing = () => {
    const services = [
        {
            title: "Concept White 3D Model",
            price: "$3.40 per sqm - Minimum $495 +GST",
            description: "Simple roofs & standard layouts (Flat ceilings, multi-storey – not split level)",
            includes: ["Clean white 3D model from PDF or CAD plans", "Accurate walls, windows, doors, stairs and levels", "Focus on space, layout and proportions", "Ideal for early design stages."]
        },
        {
            title: "Complex Concept White 3D Model",
            price: "$4.00 per sqm - Minimum $595 +GST",
            description: "Split levels, raking ceilings & complex roofs",
            includes: ["Everything in the standard Concept White Model", "Additional modelling for split levels and complex roof geometry", "Suitable when layout is resolved but finishes are not."]
        },
        {
            title: "Coloured / Textured 3D Model",
            price: "$4.80 per sqm - Minimum $895 +GST",
            includes: ["Coloured walls, roofs and floor finishes", "Kitchens and bathrooms shown in simplified form", "Furniture added for scale and clarity", "Presentation-ready visuals"]
        }
    ];

    const advancedServices = [
        {
            title: "Fully Styled / Custom 3D Model",
            price: "$6.20 per sqm - Minimum $1,295 AUD",
            includes: ["Custom colours and finishes to specification", "Furniture, lighting and styling matched to the design intent", "High-quality visuals suitable for marketing and sales use"]
        },
        {
            title: "Model Upgrades (from an existing model)",
            description: "Upgrade your existing model to a higher detail level.",
            list: [
                "Standard White → Coloured: $2.60 per sqm (min $395)",
                "Coloured → Fully Styled: $3.40 per sqm (min $595) +GST"
            ]
        },
        {
            title: "Already have a 3D model? Upload it to our partner’s engine - From $300 +GST",
            description: "Integrated via our partner’s visualisation engine, the tablet 3D walkthrough enhances spatial understanding, clarifies design intent and streamlines the approval process."
        }
    ];

    return (
        <section className="modeling-pricing-section" style={{ padding: '2rem 0' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <button className="gold-button-pill shadow-btn" style={{ marginBottom: '2.5rem' }}>
                    <span className="btn-icon">📞</span> CALL US
                </button>

                <div className="modeling-grid">
                    {services.map((s, i) => (
                        <div key={i} className="modeling-card">
                            <div className="modeling-icon-box">🏠</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>{s.title}</h3>
                                <p className="m-price">{s.price}</p>
                                {s.description && <p className="m-desc">{s.description}</p>}
                                {s.includes && (
                                    <ul className="m-features">
                                        {s.includes.map((feat, fi) => (
                                            <li key={fi}>• {feat}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modeling-grid" style={{ marginTop: '2rem' }}>
                    {advancedServices.map((s, i) => (
                        <div key={i} className="modeling-card">
                            <div className="modeling-icon-box">{i === 2 ? '📱' : '🏠'}</div>
                            <div className="modeling-content">
                                <h3 style={{ color: '#D4AF37' }}>{s.title}</h3>
                                {s.price && <p className="m-price">{s.price}</p>}
                                {s.description && <p className="m-desc">{s.description}</p>}
                                {s.list && (
                                    <ul className="m-features" style={{ listStyle: 'none', paddingLeft: 0 }}>
                                        {s.list.map((item, ii) => (
                                            <li key={ii} style={{ marginBottom: '0.4rem' }}>• {item}</li>
                                        ))}
                                    </ul>
                                )}
                                {s.includes && (
                                    <ul className="m-features">
                                        {s.includes.map((feat, fi) => (
                                            <li key={fi}>• {feat}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModelingPricing;
