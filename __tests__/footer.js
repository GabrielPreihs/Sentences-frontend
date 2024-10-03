import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Footer from '@/components/Footer'

const fakeVersionNumber = "1.0.0"
jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    version: fakeVersionNumber,
  },
}));
describe('Footer', () => {
  it('renders footer with the version', async () => {
    const footer = render(<Footer />)
    const foundVersion = await footer.getByText("App Version: " + fakeVersionNumber)

    expect(foundVersion).toBeInTheDocument()
  })
})