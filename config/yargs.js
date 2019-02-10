const argv =  require('yargs')
                .options({
                  direction: {
                    alias:'d',
                    description:'Option for City',
                    demand:true
                  }
                })
                .help()
                .argv;

module.exports = {
  argv
}