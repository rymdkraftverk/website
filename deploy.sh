#!/usr/bin/env sh

aws s3 sync web s3://rkv-website/ --acl public-read
