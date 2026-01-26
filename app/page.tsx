import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-art-100/50 to-art-200/30" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-art-900 mb-6 font-display">
            What to Draw – Get Drawing Ideas Instantly
          </h1>
          <p className="text-xl md:text-2xl text-art-600 mb-10 max-w-2xl mx-auto">
            Stuck with a blank page? Get simple drawing ideas in seconds.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/generator" className="art-button art-button-primary text-lg">
              🎯 Generate an Idea
            </Link>
            <Link href="/tools/wheel" className="art-button art-button-secondary text-lg">
              🎡 Spin the Wheel
            </Link>
            <Link href="/tools/random" className="art-button art-button-primary text-lg">
              🎲 Random Prompt
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Slot - Optional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-art-100/50 border-2 border-dashed border-art-300 rounded-xl h-24 flex items-center justify-center text-art-400">
          Ad slot – optional
        </div>
      </div>

      {/* Popular Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-art-900 mb-8 text-center font-display">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link href="/tools/generator" className="art-card p-6 block hover:-translate-y-1">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-art-800 mb-2">What to Draw Generator</h3>
            <p className="text-art-600 mb-4">Get a personalized drawing idea based on your mood and time.</p>
            <span className="text-art-600 font-medium">Try it →</span>
          </Link>

          {/* Card 2 */}
          <Link href="/tools/wheel" className="art-card p-6 block hover:-translate-y-1">
            <div className="text-4xl mb-4">🎡</div>
            <h3 className="text-xl font-bold text-art-800 mb-2">What to Draw Wheel</h3>
            <p className="text-art-600 mb-4">Spin the wheel and let chance decide what you draw.</p>
            <span className="text-art-600 font-medium">Try it →</span>
          </Link>

          {/* Card 3 */}
          <Link href="/tools/random" className="art-card p-6 block hover:-translate-y-1">
            <div className="text-4xl mb-4">🎲</div>
            <h3 className="text-xl font-bold text-art-800 mb-2">Random Drawing Prompt</h3>
            <p className="text-art-600 mb-4">One click, one random drawing idea.</p>
            <span className="text-art-600 font-medium">Try it →</span>
          </Link>
        </div>
      </section>

      {/* Popular Drawing Ideas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-art-900 mb-8 text-center font-display">Popular Drawing Ideas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ideas/what-to-draw-when-bored" className="art-badge text-base px-4 py-2">
            What to Draw When You're Bored
          </Link>
          <Link href="/ideas/easy-drawing-ideas" className="art-badge text-base px-4 py-2">
            Easy Drawing Ideas for Beginners
          </Link>
          <Link href="/ideas/cute-drawing-ideas" className="art-badge text-base px-4 py-2">
            Cute Things to Draw
          </Link>
          <Link href="/ideas/simple-drawing-ideas" className="art-badge text-base px-4 py-2">
            Simple Drawing Ideas
          </Link>
          <Link href="/ideas/aesthetic-drawing-ideas" className="art-badge text-base px-4 py-2">
            Aesthetic Drawing Ideas
          </Link>
        </div>
      </section>

      {/* Ad Slot - Content Area Middle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-art-100/50 border-2 border-dashed border-art-300 rounded-xl h-24 flex items-center justify-center text-art-400">
          Ad slot – content area middle
        </div>
      </div>

      {/* Why WhatToDraw.art Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-art-900 mb-8 text-center font-display">Why WhatToDraw.art</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-lg font-bold text-art-800 mb-2">No sign-up required</h3>
            <p className="text-art-600">Start creating immediately without any account</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-lg font-bold text-art-800 mb-2">Beginner-friendly</h3>
            <p className="text-art-600">Ideas suitable for artists of all skill levels</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-lg font-bold text-art-800 mb-2">Free drawing ideas</h3>
            <p className="text-art-600">Unlimited inspiration at no cost</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-lg font-bold text-art-800 mb-2">Perfect for quick practice</h3>
            <p className="text-art-600">Get ideas in seconds, start drawing right away</p>
          </div>
        </div>
      </section>

      {/* Drawing Challenges Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-art-100/30 rounded-3xl">
        <h2 className="text-3xl font-bold text-art-900 mb-8 text-center font-display">Drawing Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link href="/challenges/7-day" className="art-card p-6 block hover:-translate-y-1">
            <h3 className="text-xl font-bold text-art-800 mb-2">7-Day Drawing Challenge</h3>
            <p className="text-art-600 mb-4">Build a daily drawing habit with this week-long challenge.</p>
            <span className="text-art-600 font-medium">Start Now →</span>
          </Link>
          <Link href="/challenges/30-day" className="art-card p-6 block hover:-translate-y-1">
            <h3 className="text-xl font-bold text-art-800 mb-2">30-Day Drawing Challenge</h3>
            <p className="text-art-600 mb-4">Transform your art skills with a month-long creative journey.</p>
            <span className="text-art-600 font-medium">Start Now →</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-art-900 mb-6 font-display">
          Still not sure what to draw?
        </h2>
        <Link href="/tools/random" className="art-button art-button-primary text-lg">
          🎲 Get a Random Drawing Prompt
        </Link>
      </section>
    </>
  );
}
