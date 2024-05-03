const ghpages = require('gh-pages')

const options = {
  branch: 'main',
  repo: 'https://github.com/MitchelCardona28/KGen.git',
  nojekyll: true
}

ghpages.publish('../src/', options, (err) => `<p>${err}</p>`)
