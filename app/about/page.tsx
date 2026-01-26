import Link from 'next/link';

export const metadata = {
  title: 'About Us | WhatToDraw.art',
  description: 'Learn about WhatToDraw.art - our mission to help artists find inspiration and develop their creative skills.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">About Us</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            About WhatToDraw.art
          </h1>
          <p className="text-xl text-art-600">
            Your go-to source for endless drawing inspiration
          </p>
        </header>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-art-800 mb-6 font-display">Our Story</h2>
          <div className="art-card p-6">
            <p className="text-art-700 mb-4 leading-relaxed">
              WhatToDraw.art was born from a simple observation: every artist, from complete beginners to seasoned professionals,
              has experienced that moment of staring at a blank page, unsure of what to draw next.
            </p>
            <p className="text-art-700 mb-4 leading-relaxed">
              We believe that creativity shouldn't be hindered by a lack of ideas. That's why we created a platform
              that provides instant, diverse, and personalized drawing prompts to spark your imagination and get you
              creating immediately.
            </p>
            <p className="text-art-700 leading-relaxed">
              Whether you have 5 minutes or an hour, whether you're feeling happy, sad, or anything in between,
              we have the perfect prompt waiting for you.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-art-800 mb-6 font-display">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="art-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-art-800 mb-3">Inspire Creativity</h3>
              <p className="text-art-600">
                Provide endless inspiration to help artists of all levels overcome creative blocks
              </p>
            </div>
            <div className="art-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-art-800 mb-3">Build Skills</h3>
              <p className="text-art-600">
                Help artists develop consistent practice habits and improve their drawing abilities
              </p>
            </div>
            <div className="art-card p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-art-800 mb-3">Make Art Accessible</h3>
              <p className="text-art-600">
                Remove barriers to creativity by providing free, instant drawing ideas
              </p>
            </div>
            <div className="art-card p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-art-800 mb-3">Build Community</h3>
              <p className="text-art-600">
                Create a supportive environment where artists can share their creative journeys
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-art-800 mb-6 font-display">What We Offer</h2>
          <div className="space-y-4">
            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-2">Drawing Tools</h3>
              <p className="text-art-600 mb-4">
                Interactive tools like our Random Prompt Generator, Mood-Based Generator, and Spinning Wheel to get you drawing in seconds.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/tools/generator" className="art-button art-button-secondary text-sm">
                  Generator
                </Link>
                <Link href="/tools/wheel" className="art-button art-button-secondary text-sm">
                  Wheel
                </Link>
                <Link href="/tools/random" className="art-button art-button-secondary text-sm">
                  Random
                </Link>
              </div>
            </div>

            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-2">Drawing Challenges</h3>
              <p className="text-art-600 mb-4">
                Structured challenges to help you build a daily drawing habit and track your progress over time.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/challenges/7-day" className="art-button art-button-secondary text-sm">
                  7-Day Challenge
                </Link>
                <Link href="/challenges/30-day" className="art-button art-button-secondary text-sm">
                  30-Day Challenge
                </Link>
              </div>
            </div>

            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-2">Curated Ideas</h3>
              <p className="text-art-600 mb-4">
                Collections of drawing ideas organized by mood, difficulty, and theme to suit every occasion.
              </p>
              <Link href="/ideas" className="art-button art-button-secondary text-sm">
                Browse Ideas
              </Link>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-art-800 mb-6 font-display">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="art-card p-6">
              <h3 className="text-lg font-bold text-art-800 mb-3">✓ No Sign-Up Required</h3>
              <p className="text-art-600">
                Start drawing immediately without creating an account
              </p>
            </div>
            <div className="art-card p-6">
              <h3 className="text-lg font-bold text-art-800 mb-3">✓ Beginner Friendly</h3>
              <p className="text-art-600">
                Ideas and tools designed for artists at every skill level
              </p>
            </div>
            <div className="art-card p-6">
              <h3 className="text-lg font-bold text-art-800 mb-3">✓ Always Free</h3>
              <p className="text-art-600">
                Unlimited access to all tools and content at no cost
              </p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="text-center art-card p-8 border-2 border-art-600 bg-art-50">
          <h2 className="text-3xl font-bold text-art-900 mb-4 font-display">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-art-600 mb-6">
            Join thousands of artists who find daily inspiration with WhatToDraw.art
          </p>
          <Link href="/tools/random" className="art-button art-button-primary text-lg">
            🎲 Get Your First Prompt
          </Link>
        </section>
      </div>
    </div>
  );
}
