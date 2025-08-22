import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import StarIcon from './Star'

describe('StarIcon', () => {
  it('renders without crashing', () => {
    render(
      <StarIcon 
        filled={false} 
        hovered={false} 
        onClick={vi.fn()} 
        onMouseEnter={vi.fn()} 
        onMouseLeave={vi.fn()} 
      />
    )
    expect(true).toBe(true)
  })
})