import React from 'react';
import PricingHero from '../components/PricingHero';
import PricingCards from '../components/PricingCards';
import ModelingPricing from '../components/ModelingPricing';
import PricingExplanation from '../components/PricingExplanation';
import PricingSocialProof from '../components/PricingSocialProof';
import PricingConsultation from '../components/PricingConsultation';
import PricingFooterCTA from '../components/PricingFooterCTA';
import PricingQuoteForm from '../components/PricingQuoteForm';

function Pricing() {
    return (
        <div className="page pricing">
            <PricingHero />
            <div className="pricing-divider"></div>
            <PricingExplanation />
            <PricingCards />
            <PricingSocialProof />
            <PricingConsultation />
            <ModelingPricing />
            <PricingFooterCTA />
            <PricingQuoteForm />
        </div>
    );
}

export default Pricing;
