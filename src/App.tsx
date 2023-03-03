import { useState } from 'react'
import './App.css'

const quotes = [
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama'
  },{
    quote: 'Life is what happens when you\'re busy making other plans.',
    author: 'John Lennon'
  },{
    quote: 'Get busy living or get busy dying.',
    author: 'Stephen King'
  },{
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West'
  },{
    quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison'
  },{
    quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
    author: 'Albert Einstein'
  },{
    quote: 'Never let the fear of striking out keep you from playing the game.',
    author: 'Babe Ruth'
  },{
    quote: 'Money and success don\'t change people; they merely amplify what is already there.',
    author: 'Will Smith'
  },{
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking.',
    author: 'Steve Jobs'
  },{
    quote: 'Not how long, but how well you have lived is the main thing.',
    author: 'Seneca'
  }
]

interface Quote {
  quote: String,
  author: String
}

const App = () => {

  var [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10))
  var [tweet, setQuoteTweet] = useState('')

  const handleQuoteChange = () => {
    setRandomNumber(Math.floor(Math.random() * 10))
  } 
  
  let quote: Quote = quotes[randomNumber];

  return (
    <div id='quote-bg'>
      <div id="quote-box">
        <h2 id="text">{quote.quote}</h2>
        <p id="author">{quote.author}</p>
        <div id='action-box'>
          <a target='_blank' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} ${quote.author}`} id='tweet-quote'>Tweet Quote</a>
          <button id="new-quote" onClick={handleQuoteChange}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
