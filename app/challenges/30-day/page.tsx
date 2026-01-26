'use client';

import { useState } from 'react';
import Link from 'next/link';

const thirtyDayChallenges = [
  { day: 1, prompt: "Draw yourself in cartoon style" },
  { day: 2, prompt: "Create a mythical creature" },
  { day: 3, prompt: "Draw your favorite childhood toy" },
  { day: 4, prompt: "Sketch a peaceful bedroom scene" },
  { day: 5, prompt: "Draw a futuristic vehicle" },
  { day: 6, prompt: "Create a fantasy map" },
  { day: 7, prompt: "Draw something from your memory" },
  { day: 8, prompt: "Sketch a character from a movie" },
  { day: 9, prompt: "Draw a plant in detail" },
  { day: 10, prompt: "Create an underwater scene" },
  { day: 11, prompt: "Draw something made of fire" },
  { day: 12, prompt: "Sketch a medieval knight" },
  { day: 13, prompt: "Draw a cozy café interior" },
  { day: 14, prompt: "Create an alien landscape" },
  { day: 15, prompt: "Draw something mechanical" },
  { day: 16, prompt: "Sketch a person in motion" },
  { day: 17, prompt: "Draw a mystical portal" },
  { day: 18, prompt: "Create a seasonal landscape" },
  { day: 19, prompt: "Draw something vintage" },
  { day: 20, prompt: "Sketch a superhero costume" },
  { day: 21, prompt: "Draw an ancient temple" },
  { day: 22, prompt: "Create a steampunk invention" },
  { day: 23, prompt: "Draw something microscopic" },
  { day: 24, prompt: "Sketch a city at night" },
  { day: 25, prompt: "Draw a magical creature" },
  { day: 26, prompt: "Create a food festival scene" },
  { day: 27, prompt: "Draw something from the future" },
  { day: 28, prompt: "Sketch a historical figure" },
  { day: 29, prompt: "Draw a dream landscape" },
  { day: 30, prompt: "Draw yourself as you are now - compare with day 1!" },
];

export default function ThirtyDayChallengePage() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleDay = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const progress = (completedDays.size / thirtyDayChallenges.length) * 100;
  const displayedChallenges = showAll ? thirtyDayChallenges : thirtyDayChallenges.slice(0, 10);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/challenges" className="hover:text-art-700">Challenges</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">30-Day Drawing Challenge</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            30-Day Drawing Challenge
          </h1>
          <p className="text-xl text-art-600">
            Transform your art skills with a month-long creative journey.
          </p>
        </header>

        {/* Progress Bar */}
        <div className="art-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-art-800">Your Progress</h2>
            <span className="text-lg font-medium text-art-700">
              {completedDays.size} / {thirtyDayChallenges.length} Days
            </span>
          </div>
          <div className="w-full bg-art-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-art-600 to-art-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Challenge Days */}
        <div className="space-y-4 mb-8">
          {displayedChallenges.map((challenge) => (
            <div
              key={challenge.day}
              className={`art-card p-5 transition-all ${
                completedDays.has(challenge.day)
                  ? 'border-2 border-green-400 bg-green-50/50'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleDay(challenge.day)}
                  className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                    completedDays.has(challenge.day)
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-art-300 hover:border-art-500 text-art-600'
                  }`}
                >
                  {completedDays.has(challenge.day) ? '✓' : challenge.day}
                </button>
                <div className="flex-1">
                  <h3 className="font-bold text-art-800 mb-1">
                    Day {challenge.day}
                  </h3>
                  <p className="text-art-600 text-sm">{challenge.prompt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {!showAll && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(true)}
              className="art-button art-button-secondary"
            >
              Show All 30 Days ↓
            </button>
          </div>
        )}

        {/* Completion Message */}
        {completedDays.size === thirtyDayChallenges.length && (
          <div className="art-card p-8 mb-8 text-center border-2 border-art-600 bg-art-50">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-art-800 mb-4 font-display">
              Amazing Achievement!
            </h2>
            <p className="text-xl text-art-600 mb-6">
              You've completed the 30-Day Drawing Challenge! You've built a solid drawing habit!
            </p>
            <Link href="/ideas" className="art-button art-button-primary text-lg">
              Keep Drawing →
            </Link>
          </div>
        )}

        {/* Tips */}
        <div className="art-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Tips for the 30-Day Journey</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Set aside 20-60 minutes daily for focused practice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Don't skip days - consistency is key</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Experiment with different mediums and techniques</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Document your journey - take photos of each drawing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Share progress on social media for accountability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Embrace mistakes - they're part of learning</span>
            </li>
          </ul>
        </div>

        {/* Milestones */}
        <div className="art-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Milestone Rewards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-art-50 rounded-xl">
              <div className="text-2xl mb-2">🌱</div>
              <div className="font-bold text-art-800">Day 7</div>
              <div className="text-sm text-art-600">Week 1 Complete!</div>
            </div>
            <div className="text-center p-4 bg-art-50 rounded-xl">
              <div className="text-2xl mb-2">📈</div>
              <div className="font-bold text-art-800">Day 15</div>
              <div className="text-sm text-art-600">Halfway There!</div>
            </div>
            <div className="text-center p-4 bg-art-50 rounded-xl">
              <div className="text-2xl mb-2">🔥</div>
              <div className="font-bold text-art-800">Day 21</div>
              <div className="text-sm text-art-600">3 Week Streak!</div>
            </div>
            <div className="text-center p-4 bg-art-50 rounded-xl">
              <div className="text-2xl mb-2">👑</div>
              <div className="font-bold text-art-800">Day 30</div>
              <div className="text-sm text-art-600">Master Artist!</div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            New to Drawing Challenges?
          </h2>
          <Link href="/challenges/7-day" className="art-button art-button-primary text-lg">
            Start with 7-Day Challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
