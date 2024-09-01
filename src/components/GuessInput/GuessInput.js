import React from 'react'

function GuessInput({ handleSumbitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSumbit(event) {
    event.preventDefault()

    handleSumbitGuess(tentativeGuess)

    setTentativeGuess('')
  }

  return (
    <form onSubmit={handleSumbit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        disabled={gameStatus !== 'running'}
        type='text'
        required
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
