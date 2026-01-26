import Link from 'next/link';

export const metadata = {
  title: 'Drawing Challenges | WhatToDraw.art',
  description: 'Take on drawing challenges to improve your art skills and build a daily drawing habit.',
};

export default function ChallengesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            Drawing Challenges
          </h1>
          <p className="text-xl text-art-600">
            Challenge yourself and build a consistent drawing habit.
          </p>
        </header>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 7-Day Challenge */}
          <Link
            href="/challenges/7-day"
            className="art-card p-8 block hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-art-800 mb-3">
              7-Day Drawing Challenge
            </h2>
            <p className="text-art-600 mb-4">
              Perfect for beginners. Build a daily drawing habit with this week-long creative journey.
            </p>
            <ul className="space-y-2 text-art-700 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>7 unique prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>Track your progress</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>Great for beginners</span>
              </li>
            </ul>
            <span className="text-art-600 font-medium">
              Start Challenge →
            </span>
          </Link>

          {/* 30-Day Challenge */}
          <Link
            href="/challenges/30-day"
            className="art-card p-8 block hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-art-800 mb-3">
              30-Day Drawing Challenge
            </h2>
            <p className="text-art-600 mb-4">
              Transform your art skills with a comprehensive month-long creative journey.
            </p>
            <ul className="space-y-2 text-art-700 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>30 creative prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>Progress tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-art-600">✓</span>
                <span>Milestone rewards</span>
              </li>
            </ul>
            <span className="text-art-600 font-medium">
              Start Challenge →
            </span>
          </Link>
        </div>

        {/* Benefits */}
        <div className="art-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">
            Why Take a Drawing Challenge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-art-800 mb-2">Build Habits</h3>
              <p className="text-art-600 text-sm">Daily practice creates lasting habits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold text-art-800 mb-2">Improve Skills</h3>
              <p className="text-art-600 text-sm">See noticeable improvement over time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-art-800 mb-2">Try New Things</h3>
              <p className="text-art-600 text-sm">Step out of your comfort zone</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏅</div>
              <h3 className="font-bold text-art-800 mb-2">Achievement</h3>
              <p className="text-art-600 text-sm">Feel proud of completing goals</p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Tips for Success
          </h2>
          <ul className="text-left max-w-lg mx-auto space-y-2 text-art-700 mb-6">
            <li>✓ Set a specific time each day for drawing</li>
            <li>✓ Don't worry about perfection – focus on completion</li>
            <li>✓ Keep all your drawings to see your progress</li>
            <li>✓ Share your journey with friends for accountability</li>
          </ul>
          <Link href="/tools/random" className="art-button art-button-primary text-lg">
            🎲 Get a Random Prompt
          </Link>
        </div>
      </div>
    </div>
  );
}
