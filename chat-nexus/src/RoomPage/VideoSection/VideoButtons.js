import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import SwitchToScreenSharingButton from './SwitchToScreenSharingButton'
import LeaveRoomButton from './LeaveRoomButton'

const VideoButtons = (props) => {
  return (
    <div className='video_buttons_container'>
      <MicButton />
      <CameraButton />
      <LeaveRoomButton />
      <SwitchToScreenSharingButton />
    </div>
  )
}

export default VideoButtons
