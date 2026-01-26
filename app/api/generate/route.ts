import { NextResponse } from 'next/server';

const drawingPrompts = [
  { id: 1, category: "animal", prompt: "A sleeping cat in a cozy bed", difficulty: "easy" },
  { id: 2, category: "food", prompt: "A steaming cup of coffee", difficulty: "easy" },
  { id: 3, category: "fantasy", prompt: "A magical forest with glowing mushrooms", difficulty: "medium" },
  { id: 4, category: "character", prompt: "A robot trying to understand emotions", difficulty: "medium" },
  { id: 5, category: "landscape", prompt: "A lighthouse on a cliff at sunset", difficulty: "medium" },
  { id: 6, category: "fantasy", prompt: "A hot air balloon in sunset colors", difficulty: "easy" },
  { id: 7, category: "animal", prompt: "A tiny mouse having a tea party", difficulty: "medium" },
  { id: 8, category: "fantasy", prompt: "An ancient treasure map", difficulty: "easy" },
  { id: 9, category: "character", prompt: "A mermaid reading a book underwater", difficulty: "medium" },
  { id: 10, category: "object", prompt: "A vintage bicycle with flowers in the basket", difficulty: "medium" },
  { id: 11, category: "landscape", prompt: "A treehouse in an autumn forest", difficulty: "medium" },
  { id: 12, category: "fantasy", prompt: "A friendly ghost in a haunted house", difficulty: "easy" },
  { id: 13, category: "food", prompt: "A sushi chef preparing food", difficulty: "medium" },
  { id: 14, category: "animal", prompt: "A polar bear in a snowy landscape", difficulty: "medium" },
  { id: 15, category: "object", prompt: "A clock tower with unique architecture", difficulty: "medium" },
  { id: 16, category: "fantasy", prompt: "A cat astronaut floating in space", difficulty: "hard" },
  { id: 17, category: "landscape", prompt: "A cozy cabin by a mountain lake", difficulty: "medium" },
  { id: 18, category: "fantasy", prompt: "A dragon sleeping on a pile of coins", difficulty: "hard" },
  { id: 19, category: "character", prompt: "A child flying a kite on a beach", difficulty: "easy" },
  { id: 20, category: "object", prompt: "A magical potion in a crystal bottle", difficulty: "medium" },
  { id: 21, category: "animal", prompt: "A fox looking at the moon", difficulty: "medium" },
  { id: 22, category: "object", prompt: "A vintage typewriter with a half-written story", difficulty: "medium" },
  { id: 23, category: "food", prompt: "A baker decorating a large cake", difficulty: "medium" },
  { id: 24, category: "fantasy", prompt: "A fairy dancing on a flower", difficulty: "medium" },
  { id: 25, category: "animal", prompt: "An octopus playing the guitar", difficulty: "hard" },
  { id: 26, category: "landscape", prompt: "A waterfall in a tropical paradise", difficulty: "medium" },
  { id: 27, category: "object", prompt: "A train traveling through snowy mountains", difficulty: "medium" },
  { id: 28, category: "animal", prompt: "A cat curled up in a sunbeam", difficulty: "easy" },
  { id: 29, category: "fantasy", prompt: "A knight protecting a baby dragon", difficulty: "hard" },
  { id: 30, category: "object", prompt: "A hot air balloon festival at dawn", difficulty: "medium" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const difficulty = searchParams.get('difficulty');
  const count = parseInt(searchParams.get('count') || '1');

  let filteredPrompts = drawingPrompts;

  if (category && category !== 'all') {
    filteredPrompts = filteredPrompts.filter(p => p.category === category);
  }

  if (difficulty && difficulty !== 'all') {
    filteredPrompts = filteredPrompts.filter(p => p.difficulty === difficulty);
  }

  // Shuffle and get requested count
  const shuffled = [...filteredPrompts].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  return NextResponse.json({
    success: true,
    prompts: selected,
    total: drawingPrompts.length,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { category, difficulty, count = 1 } = body;

  let filteredPrompts = drawingPrompts;

  if (category && category !== 'all') {
    filteredPrompts = filteredPrompts.filter(p => p.category === category);
  }

  if (difficulty && difficulty !== 'all') {
    filteredPrompts = filteredPrompts.filter(p => p.difficulty === difficulty);
  }

  const shuffled = [...filteredPrompts].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  return NextResponse.json({
    success: true,
    prompts: selected,
    total: drawingPrompts.length,
  });
}
