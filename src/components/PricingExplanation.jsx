import React from 'react';
import './PricingExplanation.css';

const PricingExplanation = () => {
    return (
        <section className="pricing-explanation">
            <div className="container">
                <h2 className="explanation-title">
                    OUR PRICING <span className="underline">explained</span>
                </h2>

                <ul className="explanation-list">
                    <li>
                        <strong>Expert Guidance</strong> – Our design consultant can join your session for strategic layout & build insight for only <strong>$160/hr</strong>
                    </li>
                    <li>
                        Our system automatically reserves a <strong>2-hour window</strong> by default
                    </li>
                    <li>
                        Your <strong>$200 deposit</strong> is fully refundable with a minimum of 24 hours' notice for cancellations or rescheduling.
                    </li>
                    <li>
                        Session length isn't determined by size alone —we've reviewed 600-700sqm homes in 90 minutes, while some 60sqm renovations have taken two hours due to design complexities.
                    </li>
                    <li>
                        You can review as many floor plans as needed during your session.
                    </li>
                    <li>
                        Please send your full set of floor plans (PDF) and 3D renders if available to <strong>gruhams@gmail.com</strong>
                    </li>
                </ul>

                <div className="explanation-footer">
                    <h3>Easy!</h3>
                </div>
            </div>
        </section>
    );
};

export default PricingExplanation;
