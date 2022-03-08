import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Footer from '../components/Footer'

describe('Unit Testing of Card', () => {
  it('Should renders card component', async () => {
      await act(async () =>{
        await render(<Footer/>)
      })

    const heading = screen.getByTestId('footer-container')
    expect(heading).toMatchSnapshot();
  })
})