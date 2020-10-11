import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards = {flashcards} />
    
  );
}
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "2+ 2?",
    answer: '4',
  },
  {
    id: 2,
    question: "2 q.",
    answer: 'answer',
  }
]
export default App;
