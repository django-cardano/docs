var ghpages = require('gh-pages');

ghpages.publish('build', {
  src: [
    '**/*',
    '.nojekyll',
  ]
}, function(err) {
  if (err) {
    console.log('Deployment Failed', err);
  } else {
    console.log('Deployment Succeed');
  }
});
