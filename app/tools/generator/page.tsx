'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GeneratorPage() {
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const moods = [
    { id: 'happy', label: '😊 Happy', icon: '😊' },
    { id: 'calm', label: '😌 Calm', icon: '😌' },
    { id: 'adventurous', label: '🚀 Adventurous', icon: '🚀' },
    { id: 'nostalgic', label: '📷 Nostalgic', icon: '📷' },
    { id: 'mysterious', label: '🔮 Mysterious', icon: '🔮' },
    { id: 'playful', label: '🎪 Playful', icon: '🎪' },
  ];

  const timeOptions = [
    { id: 'quick', label: '⚡ Quick (5 min)' },
    { id: 'medium', label: '🎨 Medium (15-30 min)' },
    { id: 'detailed', label: '🖼️ Detailed (1+ hour)' },
  ];

  const drawingIdeas = {
    happy: {
      quick: ['Smiling sun', 'Happy flower', 'Cute animal', 'Rainbow arc'],
      medium: ['Party scene', 'Celebration with balloons', 'People laughing together', 'Festival day'],
      detailed: ['Joyful family gathering', 'Colorful carnival scene', 'Victory celebration', 'Sunrise over happy village']
    },
    calm: {
      quick: ['Peaceful cloud', 'Gentle wave', 'Sleeping cat', 'Quiet tea cup'],
      medium: ['Zen garden', 'Meditation scene', 'Calm lake reflection', 'Peaceful forest path'],
      detailed: ['Serene mountain lake at dawn', 'Cozy cabin interior', 'Tranquil Japanese garden', 'Peaceful sunset over ocean']
    },
    adventurous: {
      quick: ['Adventure map', 'Compass', 'Mountain peak', 'Explorer flag'],
      medium: ['Tropical island', 'Ancient temple', 'Space adventure', 'Deep sea dive'],
      detailed: ['Epic mountain expedition', 'Lost city discovery', 'Space station interior', 'Arctic expedition']
    },
    nostalgic: {
      quick: ['Vintage camera', 'Old book', 'Grandpas chair', 'Childhood toy'],
      medium: ['Childhood home', 'Family photo album', 'Old school', 'Grandmas kitchen'],
      detailed: ['Victorian street scene', '1950s diner', 'Childhood summer memory', 'Family reunion']
    },
    mysterious: {
      quick: ['Crystal ball', 'Ancient key', 'Mysterious door', 'Secret map'],
      medium: ['Enchanted forest', 'Underground cave', 'Ancient library', 'Shadowy alley'],
      detailed: ['Gothic cathedral', 'Ancient ruins', 'Secret laboratory', 'Mysterious carnival at night']
    },
    playful: {
      quick: ['Balloon', 'Toy', 'Kite', 'Bubble'],
      medium: ['Circus tent', 'Toy room', 'Playground', 'Fairground ride'],
      detailed: ['Amusement park', 'Toy store wonderland', 'Festival with games', 'Magical toy workshop']
    }
  };

  const generateIdea = () => {
    if (!selectedMood || !selectedTime) {
      return;
    }

    const ideas = drawingIdeas[selectedMood as keyof typeof drawingIdeas][selectedTime as keyof typeof drawingIdeas[keyof typeof drawingIdeas]];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setGeneratedIdea(randomIdea);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">What to Draw Generator</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            🎯 What to Draw Generator
          </h1>
          <p className="text-xl text-art-600">
            Get a personalized drawing idea based on your mood and available time.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Options */}
          <div className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">Choose Your Preferences</h2>

            {/* Mood Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-art-800 mb-4">How are you feeling?</h3>
              <div className="grid grid-cols-2 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedMood === mood.id
                        ? 'border-art-600 bg-art-50'
                        : 'border-art-200 hover:border-art-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.icon}</div>
                    <div className="font-medium text-art-800">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-art-800 mb-4">How much time do you have?</h3>
              <div className="space-y-3">
                {timeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedTime(option.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      selectedTime === option.id
                        ? 'border-art-600 bg-art-50'
                        : 'border-art-200 hover:border-art-300'
                    }`}
                  >
                    <div className="font-medium text-art-800">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateIdea}
              disabled={!selectedMood || !selectedTime}
              className={`w-full art-button art-button-primary text-lg ${
                !selectedMood || !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              🎯 Generate My Idea
            </button>
          </div>

          {/* Right: Result */}
          <div className="art-card p-6">
            <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">Your Drawing Idea</h2>

            <div className="flex items-center justify-center h-80">
              {generatedIdea ? (
                <div className="text-center">
                  <div className="text-6xl mb-6">{moods.find(m => m.id === selectedMood)?.icon}</div>
                  <div className="bg-art-50 rounded-xl p-8 border-2 border-art-200">
                    <h3 className="text-2xl font-bold text-art-800 mb-2">
                      Draw:
                    </h3>
                    <p className="text-3xl font-bold text-art-700 font-display">
                      {generatedIdea}
                    </p>
                  </div>
                  <button
                    onClick={generateIdea}
                    className="art-button art-button-secondary mt-6"
                  >
                    🔄 Generate Another
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-art-500 text-lg">
                    Select your preferences and click generate to get a personalized drawing idea!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="font-bold text-art-800 mb-2">Mood-Based</h3>
            <p className="text-art-600">Ideas matching your emotions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-bold text-art-800 mb-2">Time-Aware</h3>
            <p className="text-art-600">From quick sketches to detailed art</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-art-800 mb-2">Personalized</h3>
            <p className="text-art-600">Tailored to your preferences</p>
          </div>
        </div>

        {/* Related Tools */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Try Our Other Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/wheel" className="art-button art-button-secondary">
              🎡 Wheel
            </Link>
            <Link href="/tools/random" className="art-button art-button-secondary">
              🎲 Random
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
