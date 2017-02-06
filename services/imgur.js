
const request = require('request');
 
exports.getImage = function(search, page = 1) {
  return new Promise((resolve, reject) => {
let options = {
      url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
      headers: { Authorization: 'Client-ID 29d9d2836985b05' },
      json: true,
    };


  });
};