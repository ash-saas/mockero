import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto text-white">
                {/* Main Heading */}
                <h1 className="text-4xl font-bold mb-8">
                    Privacy <span className="text-white">Policy</span>
                </h1>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Introduction to Our <span className="text-white">Privacy</span> Practices
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        At <span className="text-white font-medium">Mockero</span>, we prioritize the
                        <span className="text-white font-medium"> privacy</span> of your personal information.
                        This policy outlines how we collect, use, and protect your data when you use our AI-powered interview platform.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Information We <span className="text-white">Collect</span>
                    </h2>
                    <p className="text-gray-300 mb-4">
                        We may collect the following <span className="text-white">data types</span>:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li><span className="text-white">Personal identifiers</span> (name, email)</li>
                    </ul>
                </section>

                {/* Data Usage */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        How We <span className="text-white">Use</span> Your Information
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Your <span className="text-white">data</span> helps us:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                        <li>Deliver <span className="text-white">personalized</span> interview simulations</li>
                        <li>Improve <span className="text-white">AI algorithms</span> for better feedback</li>
                        <li>Ensure <span className="text-white">security</span> and prevent fraud</li>
                    </ul>
                </section>

                {/* Data Protection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Security</span> Measures
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We implement <span className="text-white">SSL encryption</span> and
                        <span className="text-white"> access controls</span> to protect your information.
                        Regular <span className="text-white">security audits</span> ensure compliance with
                        <span className="text-white"> GDPR</span> standards.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Your <span className="text-white">Rights</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        You can <span className="text-white">request access</span>,
                        <span className="text-white"> corrections</span>, or
                        <span className="text-white"> deletion</span> of your data at any time.
                        Contact us at <span className="text-white">support@mockeroai.com</span> to exercise these rights.
                    </p>
                </section>

                {/* Policy Updates */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        <span className="text-white">Updates</span> to This Policy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We'll notify you of <span className="text-white">significant changes</span> via email or
                        platform notifications. The <span className="text-white">effective date</span> at the top
                        indicates the last revision.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
