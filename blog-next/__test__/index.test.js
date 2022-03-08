import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Home from '../pages/index'

describe('Unit Testing of Home', () => {
  it('Should renders home container', async () => {
      await act(async () =>{
        await render(<Home data={[]}/>)
      })

    const heading = screen.getByTestId('home-container')
    expect(heading).toMatchSnapshot();
  })
})