const ghpages = require('gh-pages')

ghpages.publish('../src/', {
  branch: 'main',
  repo: 'https://github.com/MitchelCardona28/KGen.git'
}, (err) => `<p>${err}</p>`)
