import { render, screen } from '@testing-library/react'
import Header from './index'


describe('Test rendering in header component', () => {

  it('should render text correctly', () => {
    render(<Header />)

    expect(screen.getByText('IP Address Tracker')).toBeInTheDocument()
  })
})
