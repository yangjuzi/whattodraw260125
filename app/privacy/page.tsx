import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | WhatToDraw.art',
  description: 'Privacy Policy for WhatToDraw.art - Learn how we protect your data and privacy.',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 25, 2026';

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="text-6xl mb-4 mb-6 text-center">🔒</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display text-center">
            Privacy Policy
          </h1>
          <p className="text-art-600 text-center">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Introduction</h2>
            <p className="text-art-700 mb-4 leading-relaxed">
              At WhatToDraw.art, we value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
            </p>
            <p className="text-art-700 leading-relaxed">
              By using WhatToDraw.art, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside text-art-600 space-y-2">
                  <li>Contact form submissions (name, email address, message)</li>
                  <li>Feedback and suggestions you choose to share with us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-art-600 space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Time and date of visit</li>
                  <li>Pages visited on our site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Cookies and Tracking</h3>
                <p className="text-art-600">
                  We use cookies to enhance your browsing experience, analyze site traffic, and improve our services.
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-art-600 space-y-2">
              <li>To provide and maintain our drawing tools and services</li>
              <li>To respond to your inquiries and customer support requests</li>
              <li>To improve our website functionality and user experience</li>
              <li>To analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To send you updates and promotional materials (with your consent)</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Information Sharing</h2>
            <div className="space-y-4">
              <p className="text-art-700 mb-4">
                We respect your privacy and do not sell, trade, or otherwise transfer your personal information to outside parties
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-art-600 space-y-2">
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent for specific purposes</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Data Security</h2>
            <p className="text-art-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-art-600">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
              to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Your Rights</h2>
            <p className="text-art-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-art-600 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of promotional communications</li>
              <li>Request a copy of your data</li>
              <li>Object to processing of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-art-600 mt-4">
              To exercise these rights, please contact us using our{' '}
              <Link href="/contact" className="text-art-600 hover:text-art-700 underline">
                contact form
              </Link>.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Third-Party Services</h2>
            <p className="text-art-700 mb-4">
              Our website may contain links to third-party websites or integrate third-party services. We have no control
              over and assume no responsibility for the content, privacy policies, or practices of these third-party sites.
            </p>
            <p className="text-art-600">
              We encourage you to review the privacy policies of any third-party services you access through our website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Children's Privacy</h2>
            <p className="text-art-700 mb-4">
              Our website is not directed to children under the age of 13. We do not knowingly collect personally
              identifiable information from children under 13.
            </p>
            <p className="text-art-600">
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us, and we will delete such information.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Changes to This Policy</h2>
            <p className="text-art-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-art-600">
              You are advised to review this Privacy Policy periodically for any changes. Changes become effective when posted.
            </p>
          </section>

          {/* Contact Us */}
          <section className="art-card p-6 border-2 border-art-600 bg-art-50">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Contact Us</h2>
            <p className="text-art-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <Link href="/contact" className="art-button art-button-primary">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
