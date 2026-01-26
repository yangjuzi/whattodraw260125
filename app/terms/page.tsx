import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | WhatToDraw.art',
  description: 'Terms of Use for WhatToDraw.art - Read our terms and conditions.',
};

export default function TermsPage() {
  const lastUpdated = 'January 25, 2026';

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">Terms of Use</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="text-6xl mb-4 text-center">📋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display text-center">
            Terms of Use
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
              Welcome to WhatToDraw.art. By accessing or using our website, you agree to comply with and be bound
              by these Terms of Use. If you disagree with any part of these terms, you must not access our website.
            </p>
            <p className="text-art-700 leading-relaxed">
              These terms apply to all visitors, users, and others who access or use WhatToDraw.art.
            </p>
          </section>

          {/* Use License */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Use License</h2>
            <div className="space-y-4">
              <p className="text-art-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on WhatToDraw.art for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">You May Not:</h3>
                <ul className="list-disc list-inside text-art-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to reverse engineer any software on the website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" them on any other server</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">User Obligations</h2>
            <p className="text-art-700 mb-4">
              As a user of WhatToDraw.art, you agree to:
            </p>
            <ul className="list-disc list-inside text-art-600 space-y-2">
              <li>Use the website only for lawful purposes</li>
              <li>Not use the website in any way that could damage, disable, or impair the website</li>
              <li>Not attempt to gain unauthorized access to any portion of the website</li>
              <li>Not use the website to transmit any malicious code or viruses</li>
              <li>Not engage in any conduct that restricts or inhibits other users' use of the website</li>
              <li>Not impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          {/* User Content */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">User Content</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Your Submissions</h3>
                <p className="text-art-700 mb-4">
                  When you submit content to WhatToDraw.art (such as through our contact form), you grant us a non-exclusive,
                  royalty-free license to use, reproduce, modify, and display that content for the purposes of providing
                  and improving our services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Content Responsibility</h3>
                <p className="text-art-700 mb-4">
                  You are solely responsible for any content you submit to our website. You represent and warrant that:
                </p>
                <ul className="list-disc list-inside text-art-600 space-y-2">
                  <li>You own or have permission to use the content</li>
                  <li>The content does not violate any third-party rights</li>
                  <li>The content is not illegal, harmful, or offensive</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Intellectual Property</h2>
            <p className="text-art-700 mb-4">
              All materials on WhatToDraw.art, including but not limited to text, graphics, logos, images,
              and software, are the property of WhatToDraw.art or its content suppliers and are protected by
              international copyright laws.
            </p>
            <p className="text-art-600">
              Unauthorized use of any materials on this website may violate copyright laws, trademark laws, and
              other applicable laws.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Disclaimer</h2>
            <div className="space-y-4">
              <p className="text-art-700 mb-4">
                The materials on WhatToDraw.art are provided on an "as is" basis. WhatToDraw.art makes no
                warranties, expressed or implied, and hereby disclaims all other warranties.
              </p>
              <p className="text-art-700 mb-4">
                Furthermore, WhatToDraw.art does not warrant or make any representations concerning the accuracy,
                likely results, or reliability of the use of the materials on its website or otherwise relating to such
                materials or any sites linked to this site.
              </p>
              <div>
                <h3 className="text-lg font-bold text-art-700 mb-2">Limitation of Liability</h3>
                <p className="text-art-600">
                  In no event shall WhatToDraw.art or its suppliers be liable for any damages arising out of the
                  use or inability to use the materials on this website, even if WhatToDraw.art has been notified
                  of the possibility of such damages.
                </p>
              </div>
            </div>
          </section>

          {/* Links to Other Websites */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Links to Other Websites</h2>
            <p className="text-art-700 mb-4">
              WhatToDraw.art may contain links to third-party websites that are not owned or controlled by us.
            </p>
            <p className="text-art-600">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              these third-party sites. We encourage you to review the terms and conditions and privacy policies of
              any third-party websites you visit.
            </p>
          </section>

          {/* Modifications */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Modifications to Terms</h2>
            <p className="text-art-700 mb-4">
              WhatToDraw.art reserves the right to modify these terms at any time. All changes are effective
              immediately when posted.
            </p>
            <p className="text-art-600">
              Your continued use of the website following the posting of revised terms means that you accept and agree
              to the changes. We encourage you to review this page periodically for any changes.
            </p>
          </section>

          {/* Termination */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Termination</h2>
            <p className="text-art-700 mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-art-600">
              Upon termination, your right to use the website will immediately cease, and all provisions of the Terms
              shall survive termination, including those regarding ownership, warranties, and limitation of liability.
            </p>
          </section>

          {/* Governing Law */}
          <section className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Governing Law</h2>
            <p className="text-art-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
              WhatToDraw.art operates.
            </p>
            <p className="text-art-600">
              Any legal action or proceeding relating to these Terms will be brought exclusively in the courts of that jurisdiction.
            </p>
          </section>

          {/* Contact Information */}
          <section className="art-card p-6 border-2 border-art-600 bg-art-50">
            <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Contact Us</h2>
            <p className="text-art-700 mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="space-y-3">
              <Link href="/contact" className="art-button art-button-primary">
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
