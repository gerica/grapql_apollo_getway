echo "------> Kill all the running PM2 actions"
pm2 kill

echo "------> Jump to app folder"
cd /home/ubuntu/projects/graphql/current/

echo "------> Update app from Git"
git reset --hard HEAD
git clean -f -d
git pull

echo "------> Run new PM2 action"
npm run deploy-local-ec2