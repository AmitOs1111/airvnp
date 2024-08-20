import React from 'react'

export function AirbnbButton({ label }) {
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
  return <button className="airbnb-button">{label}</button>
}
