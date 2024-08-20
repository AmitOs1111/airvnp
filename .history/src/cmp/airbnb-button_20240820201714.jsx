import React, { useRef } from 'react'

export function AirbnbButton({ content, func }) {
  const btnRef = useRef(null)
  const hoverEffectRef = useRef(null)

  function handleMouseMove(e) {
    const button = btnRef.current
    const hoverEffect = hoverEffectRef.current

    if (!button || !hoverEffect) return // Check if both elements exist

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Set the position of the pseudo-element
    hoverEffect.style.setProperty('--mouse-x', `${x}px`)
    hoverEffect.style.setProperty('--mouse-y', `${y}px`)

    // Adjust the position of the background effect
    hoverEffect.style.setProperty('top', `${y}px`)
    hoverEffect.style.setProperty('left', `${x}px`)

    // Scale up the ::before pseudo-element
    hoverEffect.style.setProperty('transform', 'translate(-50%, -50%) scale(1)')
  }

  function handleMouseLeave() {
    const button = btnRef.current
    const hoverEffect = hoverEffectRef.current

    if (!hoverEffect) return // Check if the hover effect element exists
    // Reset the transform on mouse leave
    hoverEffect.style.setProperty('transform', 'translate(-50%, -50%) scale(0)')
  }
  return (
    <button
      className="airbnb-button"
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => func()}
    >
      <span ref={hoverEffectRef} className="hover-effect"></span>

      {content}
    </button>
  )
}
{
  /* <button
onClick={() => doSearchStay()}
className="btn-search btn-airbnb flex align-center justify-center"
ref={btnRef}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
>
<span ref={hoverEffectRef} className="hover-effect"></span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  aria-hidden="true"
  role="presentation"
  focusable="false"
  style={{
    display: 'block',
    fill: 'none',
    height: '16px',
    width: '16px',
    stroke: 'currentcolor',
    strokeWidth: '4',
    overflow: 'visible',
  }}
>
  <path
    fill="none"
    d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
  ></path>
</svg>
</button> */
}
