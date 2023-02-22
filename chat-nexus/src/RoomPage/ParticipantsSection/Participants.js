import React from 'react'

const dummyPat = [
    {
        identity: 'Rodrygo'
    },{
        identity: 'Vinicius'
    },{
        identity: 'Modric'
    },{
        identity: 'Benzema'
    }
];

const SingleParticipant = (props) => {
    const {identity, lastItem, participant} = props;

    return <>
    <p className='participants_paragraph'>{identity}</p>
    {!lastItem && <span className='participants_separator_line'></span>}
    </>
}

const Participants = () => {
  return (
    <div className='participants_container'>
      {dummyPat.map((participant,index) =>{
        return (
            <SingleParticipant
            key={participant.identity}
            lastItem={dummyPat.length === index + 1}
            participant={participant}
            identity={participant.identity}
            />
        )
      } )}
    </div>
  )
}

export default Participants
