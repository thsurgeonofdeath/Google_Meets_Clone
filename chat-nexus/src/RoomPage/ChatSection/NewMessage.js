import React, { useState } from 'react'
import SendMessageButton from "../../resources/images/sendMessageButton.svg";
import * as WebRTCHandler from "../../utils/webRTCHandler"


const NewMessage = () => {
  const [message, setMessage] = useState('')

  const handleKeyPressed = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault()

      sendMessage()
    }
  }

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  }

  const sendMessage = () => {
    if(message.length > 0){
      WebRTCHandler.sendMessageUsingDataChannel(message)
      setMessage('')
    }
  }

  return (
    <div className='new_message_container'>
      <input 
        className='new_message_input'
        value={message}
        onChange={handleTextChange}
        placeholder='Type your message'
        type='text'
        onKeyDown={handleKeyPressed}
      />
      <img 
        className='new_message_button'
        src={SendMessageButton}
        onClick={sendMessage}
      />
    </div>
  )
}

export default NewMessage
