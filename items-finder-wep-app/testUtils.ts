import { render } from '@testing-library/react'
import { FeedbackContext, FeedbackProvider } from './lib/providers'

const Providers = ({ children }) => {
  return children
}
const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })
  // render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

// override render method
export { customRender as render }