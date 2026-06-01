import React from 'react';

function PricingCards() {
    const plans = [
        {
            time: "60 mins",
            bestFor: "BEST FOR: SMALL ADJUSTMENTS OR FINALISED PLANS.",
            price: "$590",
            features: [
                "Experience your home before you build",
                "Best suited for minor adjustments or finalised layouts",
                "Set up and full use of props, furniture and partition walls",
                "1:1 scale floor plans projection in 4K",
                "1:1 scale elevations projected on side wall",
                "Specified start and finish times"
            ]
        },
        {
            time: "90 mins",
            bestFor: "BEST FOR: MOST RESIDENTIAL PROJECTS.",
            price: "$790",
            featured: true,
            features: [
                "Experience your home before you build",
                "Most suitable for the majority of residential projects",
                "Allows time to review layout, proportions & room flow",
                "Opportunity to test adjustments during the session",
                "Set up and full use of props, furniture and partition walls",
                "1:1 scale floor plans projection in 4K",
                "1:1 scale elevations projected on side wall",
                "Specified start and finish times"
            ]
        },
        {
            time: "120 mins",
            bestFor: "BEST FOR: LARGER HOMES OR TESTING MULTIPLE LAYOUT VARIATIONS.",
            price: "$990",
            features: [
                "Experience your home before you build",
                "Recommended for larger or more complex homes",
                "Ideal if you want to test multiple layout options",
                "Set up and full use of props, furniture and partition walls",
                "1:1 scale floor plans projection in 4K",
                "1:1 scale elevations projected on side wall",
                "Specified start and finish times - extra hours $500+gst per hour thereafter (if available)"
            ]
        }
    ];

    return (
        <section className="pricing-section-wrapper">
            {/* Header with background "PLANS" text */}
            <div className="pricing-title-area">
                <h2 className="pricing-main-title">Pricing structure</h2>
            </div>

            {/* Cards */}
            <div className="pricing-cards-row">
                {plans.map((plan, index) => (
                    <div key={index} className={`p-card${plan.featured ? ' p-card--gold' : ''}`}>
                        {/* Most Popular badge */}
                        {plan.featured && (
                            <div className="p-card__badge">
                                <div className="p-card__badge-oval">
                                    <span className="p-card__badge-line1">Most</span>
                                    <span className="p-card__badge-line2">Popular</span>
                                </div>
                            </div>
                        )}

                        <p className="p-card__best-for">{plan.bestFor}</p>
                        <h2 className="p-card__time">{plan.time}</h2>

                        {plan.featured && <div className="p-card__divider"></div>}

                        <p className="p-card__gst">Prices excludes GST</p>
                        <h3 className="p-card__price">{plan.price}</h3>
                        <p className="p-card__addon">Design consultant available as an optional add-on from $160/hr.</p>

                        <ul className="p-card__features">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex}>
                                    <span className="p-card__check">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PricingCards;
