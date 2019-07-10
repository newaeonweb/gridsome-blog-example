const axios = require('axios');
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });

  api.loadSource(async store => {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character/'
    );

    const contentType = store.addContentType({
      typeName: 'BlogPosts',
      route: '/characters/:id',
    });

    for (const item of data.results) {
      console.log(data);
      contentType.addNode({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        type: item.type,
        gender: item.gender,
        origin: item.origin,
        location: item.location,
        image: item.image,
        episode: item.episode,
        url: item.url,
        created: item.created,
      });
    }
  });
};
