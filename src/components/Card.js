import React from 'react'

const Card = (props) => {
  const {name,id,email} = props;
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 bw2 grow shadow-5 tc georgia">
      <img alt="photo" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}


export default Card;