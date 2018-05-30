var which = require('which')

var gokc = null
var okc = null

try {
  gokc = which.sync('gokc')
} catch (e) {
}

try {
  okc = which.sync('okc')
} catch (e) {
}
if (process.argv.length > 2) {
  if (gokc && process.argv[2] === 'gokc') {
    runGokc()
  } else if (okc && process.argv[2] === 'okc') {
    runokc()
  }
} else if (gokc && okc) {
  console.log('both okc and gokc has been found in your system')
  console.log('restart the command with the desired client:')
  console.log('npm run start_okc')
  console.log('or')
  console.log('npm run start_gokc')
} else if (gokc) {
  runGokc()
} else if (okc) {
  runOkc()
} else {
  console.log('neither okc or gokc has been found in your system')
}

function runOkc () {
  console.log('starting okc...')
  process.exit(20)
}

function runGokc () {
  console.log('starting gokc..')
  process.exit(21)
}
