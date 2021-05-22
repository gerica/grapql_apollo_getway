echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Jump to app folder"
cd /projects/graphql/current

echo "Run new PM2 action"
npm run deploy-local-ec2