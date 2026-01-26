import Link from 'next/link';
import { getAllIdeas } from '@/content/ideas/utils';

export const metadata = {
  title: 'Drawing Ideas | WhatToDraw.art',
  description: 'Browse our collection of drawing ideas for every mood, skill level, and occasion. Find inspiration for your next masterpiece.',
};

export default function IdeasPage() {
  const ideas = getAllIdeas();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            Drawing Ideas
          </h1>
          <p className="text-xl text-art-600 max-w-2xl mx-auto">
            Browse our collection of drawing ideas for every mood, skill level, and occasion.
          </p>
        </header>

        {/* CTA */}
        <div className="text-center mb-12">
          <Link href="/tools/random" className="art-button art-button-primary text-lg">
            🎲 Get a Random Prompt
          </Link>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <Link
              key={idea.slug}
              href={`/ideas/${idea.slug}`}
              className="art-card p-6 block hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold text-art-800 mb-2">
                {idea.title}
              </h2>
              <p className="text-art-600 mb-4">
                {idea.description}
              </p>
              <span className="text-art-600 font-medium">
                View Ideas →
              </span>
            </Link>
          ))}
        </div>

        {/* Tools CTA */}
        <div className="mt-16 text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Want More Inspiration?
          </h2>
          <p className="text-art-600 mb-6 max-w-2xl mx-auto">
            Try our drawing tools to get personalized ideas, spin the wheel, or get instant random prompts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/generator" className="art-button art-button-primary">
              🎯 Generator
            </Link>
            <Link href="/tools/wheel" className="art-button art-button-secondary">
              🎡 Wheel
            </Link>
            <Link href="/tools/random" className="art-button art-button-primary">
              🎲 Random
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
