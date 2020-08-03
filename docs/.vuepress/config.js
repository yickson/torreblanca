module.exports = {
    title: 'Torre Blanca',
    description: 'Historia de un tiempo sin fin',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Historias', link: '/historias/' },
        { text: 'Api', link: '/api/' }
      ],
      sidebar: {
        '/historias/': [
          '',
          'noriem'
        ],
  
        // '/bar/': [
        //   '',      /* /bar/ */
        //   'three', /* /bar/three.html */
        //   'four'   /* /bar/four.html */
        // ],
  
        '/api/': 'auto', /* automatically generate single-page sidebars */
      }
    }
  }