const fs = require('fs');
const sdk = require('@balena/transformer-sdk');
const fetch = require('node-fetch');

sdk.transform(repourl2readme);

async function repourl2readme(manifest) {
    const repourl = manifest.input.contract.data.url;
    console.dir(repourl);    

    const response = await fetch(repourl);
    const body = await response.text();
    var fields = body.split('\n#');

    return [{ contract: {
        type: 'readme',
        data: {
          content: fields[0]+fields[1],
        }
      }, artifactPath: '/output' }]

}
