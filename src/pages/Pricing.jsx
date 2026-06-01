import React from 'react';
import PricingCards from '../components/PricingCards';
import ModelingPricing from '../components/ModelingPricing';

function Pricing() {
    return (
        <div className="page pricing">
            <header className="pricing-header">
                <h1>Pricing structure</h1>
            </header>

            <PricingCards />
            <ModelingPricing />
        </div>
    );
}

export default Pricing;
