module.exports = {
    title: 'Torre Blanca',
    description: 'Historia de un tiempo sin fin',
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
          }
        ]
      }
  }