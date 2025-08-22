import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import StarIcon from './Star'

describe('StarIcon', () => {
  const mockProps = {
    filled: false,
    hovered: false,
    onClick: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
  }

  it('renders unfilled star when not filled or hovered', () => {
    render(<StarIcon {...mockProps} />)
    const star = screen.getByRole('button')
    expect(star).toBeInTheDocument()
    expect(star).toHaveClass('text-gray-400')
  })

  it('renders filled star when filled', () => {
    render(<StarIcon {...mockProps} filled={true} />)
    const star = screen.getByRole('button')
    expect(star).toHaveClass('text-amber-500')
  })

  it('renders filled star when hovered', () => {
    render(<StarIcon {...mockProps} hovered={true} />)
    const star = screen.getByRole('button')
    expect(star).toHaveClass('text-amber-500')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    render(<StarIcon {...mockProps} />)
    const star = screen.getByRole('button')
    
    await user.click(star)
    expect(mockProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onMouseEnter when hovered', async () => {
    const user = userEvent.setup()
    render(<StarIcon {...mockProps} />)
    const star = screen.getByRole('button')
    
    await user.hover(star)
    expect(mockProps.onMouseEnter).toHaveBeenCalledTimes(1)
  })
})