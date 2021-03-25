export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605cb46d8ea010569077e9a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7iqix3ht',
                  apiId: 'fb337f17-f028-4855-91af-27659e9f9d4f'
                },
                {
                  buildHookId: '605cb46dcb907b4cc93c2b78',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mjieupqr',
                  apiId: '00c6208b-7c72-46fb-938d-9aeb8e89e551'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erdenedavaa/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mjieupqr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
