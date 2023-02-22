import React, { useState } from "react";
import JoinRoomInputs from "./JoinRoomInputs";
import { connect } from "react-redux";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import {setConnectOnlyWithAudio, setIdentity, setRoomId} from "../store/actions";
import ErrorMessage from './ErrorMessage'
import JoinRoomButtons from "./JoinRoomButtons";
import {useHistory} from 'react-router-dom'
import { getRoomExists} from '../utils/api'

const JoinRoomContent = (props) => {
  const {
    isRoomHost,
    setConnectOnlyWithAudio,
    connectOnlyWithAudio,
    setIdentityAction,
    setRoomIdAction
  } = props;

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory();

  const handleJoinRoom = async () => {
    setIdentityAction(nameValue)
   if(isRoomHost){
    createRoom();
   }else{
    await joinRoom();
   }
  }

  const joinRoom = async () => {
     //Joining the room
    const responseMessage = await getRoomExists(roomIdValue);

    const { roomExists, full } = responseMessage;

    if(roomExists){
      if(full){
        setErrorMessage('Meeting is full, please join later')
      }else{
        // join a room !
        history.push("/room")
        setRoomIdAction(roomIdValue)
      }
    }else{
      setErrorMessage('Room Not Found. check your meeting ID')
    }
  }

  const createRoom = () => {
    history.push("/room")
  }

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage}/>
      <JoinRoomButtons 
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />

    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
  };
};


export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
