import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-white mb-6">Refund Policy</h1>

            <p className="text-lg text-white mb-6">
                At <span className="font-semibold text-white">Mockero</span>, we strive to provide exceptional value through our AI-powered interview preparation platform. Please read our refund policy carefully before subscribing.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Subscription Refunds</h2>
            <p className="text-white mb-6">
                Mockero operates on a subscription-based model, and due to the nature of our services, we do not offer refunds for any payments made. Once a subscription is activated, users gain immediate access to premium features, making refunds impractical.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Cancellation Policy</h2>
            <p className="text-white mb-6">
                You can cancel your subscription at any time to avoid future charges. After cancellation, you will continue to have access to Mockero’s services until the end of your current billing cycle. No further payments will be processed after cancellation.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Free Trial</h2>
            <p className="text-white mb-6">
                Our Trial Plan allows you to explore Mockero’s without committing to a paid subscription for 3-days. We encourage users to try this plan first before upgrading. No credit-cards required.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Need Help?</h2>
            <p className="text-white">
                If you have any questions or concerns regarding your subscription or billing, please contact our support team at{' '}
                <a href="mailto:support@mockero.com" className="text-white underline">support@mockeroai.com</a>. We’re here to assist you.
            </p>
        </div>
    );
};

export default RefundPolicy;
