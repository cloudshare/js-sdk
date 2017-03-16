'use strict';
var cssdk = require('./src/index.js');

cssdk.req({
    hostname: 'use.cloudshare.com',
    method: 'GET',
    path: 'envs',
    apiId: process.env.CLOUDSHARE_API_ID,
    apiKey: process.env.CLOUDSHARE_API_KEY
})
    .then(function(response) {
        console.log('hi! these are my environments:');
        console.log(response.content);
    })
    .catch(function(response) {
        console.log(response);
        if (response instanceof Error)
            console.log(response);
        else
            console.log('got status:', response.status,
                'with content:', response.content);
    });
