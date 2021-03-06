import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/styles/styles.css'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}
