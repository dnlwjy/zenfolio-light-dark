import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'irfb1i5g',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  },
  typegen: {
    generates: '../types/sanity.types.ts',
  }
})
