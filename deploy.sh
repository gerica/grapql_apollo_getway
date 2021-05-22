echo "------> Kill all the running PM2 actions"
pm2 kill
pm2 list

echo "------> Jump to app folder"
cd /home/ubuntu/projects/graphql/current/

echo "------> Update app from Git"
git pull

echo "------> Run new PM2 action"
npm run deploy-local-ec2