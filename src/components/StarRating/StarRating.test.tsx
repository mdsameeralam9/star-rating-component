import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import StarRating from './index'

describe('StarRating', () => {
  it('renders 5 stars by default', () => {
    render(<StarRating />)
    const stars = screen.getAllByRole('button')
    expect(stars).toHaveLength(5)
  })

  it('renders custom number of stars', () => {
    render(<StarRating numberOfStar={3} />)
    const stars = screen.getAllByRole('button')
    expect(stars).toHaveLength(3)
  })

  it('sets initial rating', () => {
    render(<StarRating initialRating={3} />)
    const stars = screen.getAllByRole('button')
    
    // First 3 stars should be filled (amber color)
    expect(stars[0]).toHaveClass('text-amber-500')
    expect(stars[1]).toHaveClass('text-amber-500')
    expect(stars[2]).toHaveClass('text-amber-500')
    expect(stars[3]).toHaveClass('text-gray-400')
    expect(stars[4]).toHaveClass('text-gray-400')
  })

  it('updates rating when star is clicked', async () => {
    const user = userEvent.setup()
    const onRatingChange = vi.fn()
    render(<StarRating onRatingChange={onRatingChange} />)
    
    const stars = screen.getAllByRole('button')
    await user.click(stars[2]) // Click 3rd star
    
    expect(onRatingChange).toHaveBeenCalledWith(3)
  })

  it('shows hover effect on stars', async () => {
    const user = userEvent.setup()
    render(<StarRating />)
    
    const stars = screen.getAllByRole('button')
    await user.hover(stars[2]) // Hover 3rd star
    
    // First 3 stars should show hover effect
    expect(stars[0]).toHaveClass('text-amber-500')
    expect(stars[1]).toHaveClass('text-amber-500')
    expect(stars[2]).toHaveClass('text-amber-500')
  })

  it('maintains rating after click and hover', async () => {
    const user = userEvent.setup()
    render(<StarRating />)
    
    const stars = screen.getAllByRole('button')
    
    // Click 2nd star
    await user.click(stars[1])
    expect(stars[0]).toHaveClass('text-amber-500')
    expect(stars[1]).toHaveClass('text-amber-500')
    
    // Hover 4th star
    await user.hover(stars[3])
    expect(stars[0]).toHaveClass('text-amber-500')
    expect(stars[1]).toHaveClass('text-amber-500')
    expect(stars[2]).toHaveClass('text-amber-500')
    expect(stars[3]).toHaveClass('text-amber-500')
    
    // Unhover should maintain original rating
    await user.unhover(stars[3])
    expect(stars[0]).toHaveClass('text-amber-500')
    expect(stars[1]).toHaveClass('text-amber-500')
    expect(stars[2]).toHaveClass('text-gray-400')
  })
})