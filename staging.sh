rm -rf build/
npm run build

aws s3 sync --profile=nescaum build/ s3://ny-web-nescaum-ccsc-dataservices --acl public-read
rm -rf build/
echo "Page deployed to: http://ny-web-nescaum-ccsc-dataservices.s3-website-us-east-1.amazonaws.com"
