module.exports = {
    title: 'Torre Blanca',
    description: 'Historia de un tiempo sin fin',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/assets/site.webmanifest"}],
      ['link', { rel: "shortcut icon", href: "/assets/favicon.ico"}],
    ],
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Historias', link: '/historias/' },
        { text: 'Noriem', link: '/noriem/' },
        { text: 'Api', link: '/api/' }
      ],
      sidebar: [
          {
            title: 'Historias',
            collapsable: false,
            children: [
              '',
              'historias/noriem',
            ]
          },
          {
            title: 'Noriem',
            collapsable: true,
            children: [
                'noriem/',
                'noriem/vigilantes',
                'noriem/llegada'
            ]
          },
          {
            title: 'Exenom',
            collapsable: true,
            children: [
                'exenom/',
                'exenom/inicio'
            ]
          }
        ]
      }
  }