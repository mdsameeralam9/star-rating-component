import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StarRating from './index'

describe('StarRating', () => {
  it('renders without crashing', () => {
    render(<StarRating />)
    expect(true).toBe(true)
  })

  it('renders correct number of stars', () => {
    const { container } = render(<StarRating numberOfStar={3} />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBe(3)
  })
})