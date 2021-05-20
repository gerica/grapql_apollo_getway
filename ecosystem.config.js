module.exports = {
  apps: [
    {
      name: 'RadiolifeGateway',
      script: './src/server.js',
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-128-171-86.us-east-2.compute.amazonaws.com/',
      key: '~/Projetos/radiolife/Radiolife-us-east-2-dp.pem',
      ref: 'origin/main',
      repo: 'git@github.com:gerica/grapql_apollo_getway.git',
      path: '/home/ubuntu/projects',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
