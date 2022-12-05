import React from 'react'
import './TransitionReversed.css'

const TransitionReversed = () => {
  return (
      <div>
          <svg className="waves_rev" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                  <path id="gentle_wave_rev" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax_rev--off">
                  <use xlinkHref="#gentle_wave_rev" x="-79" y="7" fill="rgba(255,255,255,0.7" />
                  <use xlinkHref="#gentle_wave_rev" x="20" y="9" fill="rgba(255,255,255,0.5)" />
                  <use xlinkHref="#gentle_wave_rev" x="25" y="3" fill="rgba(255,255,255,0.3)" />
                  <use xlinkHref="#gentle_wave_rev" x="-30" y="9" fill="#fff" />
              </g>
          </svg>
      </div>
  )
}

export default TransitionReversed