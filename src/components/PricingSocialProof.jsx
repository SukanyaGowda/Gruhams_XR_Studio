import React from 'react';
import GoogleReviews from './GoogleReviews';

const PricingSocialProof = () => {
    return (
        <section className="pricing-social-proof" style={{ padding: '2rem 0', background: '#fff' }}>
            <div className="container">
                {/* 1. Video: Walkthrough Demo (Clean Embed) */}
                <div className="callout-video-main" style={{ marginBottom: '2rem' }}>
                    <div className="video-aspect-ratio" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.youtube.com/embed/uWRlhNymh5s?autoplay=1&mute=1&controls=0&loop=1&playlist=uWRlhNymh5s&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1&start=5"
                            title="Gruhams XR Studio Walkthrough"
                            className="video-iframe-clipped"
                            style={{ position: 'absolute', top: '-60px', left: 0, width: '100%', height: 'calc(100% + 120px)', pointerEvents: 'none' }}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <GoogleReviews />
            </div>
        </section>
    );
};

export default PricingSocialProof;
