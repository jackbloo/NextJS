import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import About from '../pages/about'

describe('Unit Testing of About', () => {
  it('Should renders about component', async () => {
      await act(async () =>{
        await render(<About data={[]}/>)
      })

    const heading = screen.getByTestId('about-container')
    expect(heading).toMatchSnapshot();
  })
})