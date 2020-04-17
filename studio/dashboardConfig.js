export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e9a19ce34c719823cbba18a',
                  title: 'Sanity Studio',
                  name: 'sapper-blog-studio-q2nbwrvv',
                  apiId: '603631c6-45b7-47ce-9f1d-3f9db6f007c0'
                },
                {
                  buildHookId: '5e9a19ce6446eda3d4988a7f',
                  title: 'Blog Website',
                  name: 'sapper-blog-web',
                  apiId: '6d93f10f-ee8d-4a7a-9383-c3c30ea90b81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hakimmazouz/sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sapper-blog-web.netlify.app', category: 'apps'}
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
