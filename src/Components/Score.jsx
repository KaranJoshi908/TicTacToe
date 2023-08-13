import React, {useRef} from 'react'

export const Score = ({score}) => {
  return (
    <>
    <h1 style={{margin: '20px'}}>Total Score</h1>
    <div style={{margin: '20px'}}>
      <h2>X Won : { score.x } , O Won : { score.o } , Draw : { score.draw } </h2>
    </div>
    </>
  )
}
