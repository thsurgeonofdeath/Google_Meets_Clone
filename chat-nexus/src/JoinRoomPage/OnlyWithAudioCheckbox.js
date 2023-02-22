import React from 'react'
import CheckImg from "../resources/images/check.png";
const OnlyWithAudioCheckBox = ({setConnectOnlyWithAudio, connectOnlyWithAudio}) => {
    
    const handleConnectionTypeChange = () => {
        setConnectOnlyWithAudio(!connectOnlyWithAudio);
    };


  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
          {connectOnlyWithAudio && (
            <img className="checkbox_image" src={CheckImg} alt=""></img>
          )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  )
}

export default OnlyWithAudioCheckBox
