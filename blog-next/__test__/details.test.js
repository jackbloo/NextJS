import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Details from '../pages/blogs/[id]'

describe('Unit Testing of Details', () => {
  it('Should renders details component', async () => {
      await act(async () =>{
        await render(<Details data={[{name: 'test', image: 'https://google.com', content: 'test'}]}/>)
      })

    const heading = screen.getByTestId('detail-container')
    expect(heading).toMatchSnapshot();
  })
})