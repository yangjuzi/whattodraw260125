'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RandomPromptPage() {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const drawingPrompts = [
    "Draw a sleeping cat in a cozy bed",
    "Draw a coffee mug with steam rising",
    "Draw a magical forest with glowing mushrooms",
    "Draw a robot trying to understand emotions",
    "Draw a lighthouse on a cliff",
    "Draw a hot air balloon in sunset colors",
    "Draw a tiny mouse having a tea party",
    "Draw an ancient treasure map",
    "Draw a mermaid reading a book underwater",
    "Draw a vintage bicycle with flowers in the basket",
    "Draw a treehouse in an autumn forest",
    "Draw a friendly ghost in a haunted house",
    "Draw a sushi chef preparing food",
    "Draw a polar bear in a snowy landscape",
    "Draw a clock tower with unique architecture",
    "Draw a cat astronaut floating in space",
    "Draw a cozy cabin by a mountain lake",
    "Draw a dragon sleeping on a pile of coins",
    "Draw a child flying a kite on a beach",
    "Draw a magical potion in a crystal bottle",
    "Draw a fox looking at the moon",
    "Draw a vintage typewriter with a half-written story",
    "Draw a baker decorating a large cake",
    "Draw a fairy dancing on a flower",
    "Draw an octopus playing the guitar",
    "Draw a waterfall in a tropical paradise",
    "Draw a train traveling through snowy mountains",
    "Draw a cat curled up in a sunbeam",
    "Draw a knight protecting a baby dragon",
    "Draw a hot air balloon festival at dawn"
  ];

  const getRandomPrompt = () => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * drawingPrompts.length);
    const newPrompt = drawingPrompts[randomIndex];

    setTimeout(() => {
      setPrompt(newPrompt);
      setIsSpinning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">Random Drawing Prompt</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            🎲 Random Drawing Prompt
          </h1>
          <p className="text-xl text-art-600">
            One click, one random drawing idea. Get instant inspiration!
          </p>
        </header>

        {/* Main Card */}
        <div className="art-card p-8 mb-8">
          <div className="text-center">
            <button
              onClick={getRandomPrompt}
              disabled={isSpinning}
              className={`art-button art-button-primary text-2xl px-12 py-6 mb-8 ${
                isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {isSpinning ? '🎲 Rolling...' : '🎲 Get Random Prompt'}
            </button>

            {prompt && (
              <div className="bg-art-50 rounded-2xl p-8 border-2 border-art-200">
                <h2 className="text-3xl font-bold text-art-800 mb-4 font-display">
                  Your Prompt:
                </h2>
                <p className="text-2xl text-art-700 mb-6">{prompt}</p>
                <button
                  onClick={getRandomPrompt}
                  disabled={isSpinning}
                  className="art-button art-button-secondary"
                >
                  🔄 Get Another
                </button>
              </div>
            )}

            {!prompt && !isSpinning && (
              <p className="text-art-500 text-lg">
                Click the button above to get a random drawing prompt!
              </p>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-art-800 mb-2">Instant</h3>
            <p className="text-art-600">Get a prompt in one click</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-art-800 mb-2">Creative</h3>
            <p className="text-art-600">Unique ideas every time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🆓</div>
            <h3 className="font-bold text-art-800 mb-2">Free</h3>
            <p className="text-art-600">No sign-up required</p>
          </div>
        </div>

        {/* Related Tools */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Try Our Other Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/generator" className="art-button art-button-secondary">
              🎯 Generator
            </Link>
            <Link href="/tools/wheel" className="art-button art-button-secondary">
              🎡 Wheel
            </Link>
          </div>
        </div>

        {/* More Ideas CTA */}
        <div className="text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Want More Inspiration?
          </h2>
          <Link href="/ideas" className="art-button art-button-primary text-lg">
            Browse Drawing Ideas
          </Link>
        </div>
      </div>
    </div>
  );
}
