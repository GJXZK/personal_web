pnpm build-only
ssh root@115.120.248.121 "rm -rf /www/wwwroot/dist/*"
scp -r ./dist root@115.120.248.121:/www/wwwroot