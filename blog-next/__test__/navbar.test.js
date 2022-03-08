import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Navbar from '../components/Navbar'

describe('Unit Testing of Navbar', () => {
  it('Should renders navbar container', async () => {
      await act(async () =>{
        await render(<Navbar title="about"/>)
      })

    const heading = screen.getByTestId('navbar-container')
    expect(heading).toMatchSnapshot();
  })
})