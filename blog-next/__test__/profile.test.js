import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Profile from '../components/Profile'

describe('Unit Testing of Profile', () => {
  it('Should renders profile container', async () => {
      await act(async () =>{
        await render(<Profile data={{name: 'test', role: 'test', content:'test', image:'https://google.com'}}/>)
      })

    const heading = screen.getByTestId('profile-container')
    expect(heading).toMatchSnapshot();
  })
})