import React from 'react'

export default function Arrow() {
  return (
    <>
     <svg
      fill="#ffffff"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line"
    >
      <path
        d="M3,12H21m-3,3,3-3L18,9"
        style={{
          fill: 'none',
          stroke: 'rgb(255, 255, 255)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 1.5,
        }}
      />
    </svg>
    </>
  )
}
