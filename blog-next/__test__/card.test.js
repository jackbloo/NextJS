import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Card from '../components/Card'

describe('Unit Testing of Card', () => {
  it('Should renders card component', async () => {
      await act(async () =>{
        await render(<Card data={{name: 'test', image: 'https://google.com', content: 'test'}}/>)
      })

    const heading = screen.getByTestId('card-container')
    expect(heading).toMatchSnapshot();
  })
})