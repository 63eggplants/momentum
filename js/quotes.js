const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Always remember that you are absolutely unique. Just like everyone else.',
    author: 'Margaret Mead',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: 'Robert Louis Stevenson',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todayQuote.quote;
author.textContent = todayQuote.author;
