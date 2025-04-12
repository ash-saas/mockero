import React from 'react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto text-white">
                {/* Main Heading */}
                <h1 className="text-4xl font-bold mb-8">
                    Terms of <span className="text-white">Service</span>
                </h1>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Welcome to <span className="text-white">Mockero</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        By using our AI-powered interview platform, you agree to these terms. Please read them carefully before accessing our services.
                    </p>
                </section>

                {/* Service Description */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Service</span> Overview
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Mockero provides AI-driven interview simulations with real-time feedback. Users must be at least 16 years old to create an account.
                    </p>
                </section>

                {/* User Obligations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        User <span className="text-white">Responsibilities</span>
                    </h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Provide accurate information during account creation</li>
                        <li>Do not share login credentials or misuse AI-generated content</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </section>

                {/* Payments */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Subscription</span> Terms
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        All payments are non-refundable. Subscriptions auto-renew until canceled. You may upgrade/downgrade plans at any time.
                    </p>
                </section>

                {/* Intellectual Property */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Ownership</span> Rights
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Mockero retains all rights to platform content. Users own their interview data but grant us a license to improve our AI models.
                    </p>
                </section>

                {/* Termination */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Account <span className="text-white">Termination</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may suspend accounts for policy violations. Users can cancel subscriptions anytime through their dashboard.
                    </p>
                </section>

                {/* Disclaimers */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Limitations</span>
                    </h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>AI feedback is for guidance only, not professional advice</li>
                        <li>We don't guarantee job placement outcomes</li>
                        <li>Service availability may vary by region</li>
                    </ul>
                </section>

                {/* Governing Law */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Legal <span className="text-white">Jurisdiction</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        These terms are governed by the laws of Pakistan. Disputes will be resolved through arbitration.
                    </p>
                </section>

                {/* Changes */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Policy <span className="text-white">Updates</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We'll notify users of significant changes via email. Continued use constitutes acceptance of revised terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
