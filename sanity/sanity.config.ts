import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'my portfolio cms',

  projectId: 'irfb1i5g',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'shop',
              title: 'Builds',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'projects',
              title: 'Case Studies',
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(
              (listItem) => !['shop', 'projects'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
