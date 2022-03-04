export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '622277c78d269509e32fcd9f',
                  title: 'Sanity Studio',
                  name: 'rpcalendar-studio',
                  apiId: '3209bca4-809f-4bfe-8498-cd903aebfd04'
                },
                {
                  buildHookId: '622277c8495b940c8ad090aa',
                  title: 'Blog Website',
                  name: 'rpcalendar',
                  apiId: 'd27cb768-eaf7-41f8-8cdd-852935957b22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SDWaps/RPCalendar',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rpcalendar.netlify.app', category: 'apps'}
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
