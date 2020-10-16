import React, { useEffect, useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'
import axios from 'axios'
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          return {
            id: `${index}-${Date.now()}`,
            question: questionItem.question,
            answer: questionItem.correct_answer
          }
        }))
        console.log(res.data)
      })

  }, [])
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
