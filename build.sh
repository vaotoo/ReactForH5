#!/bin/bash

rm -rf dist
rm -rf output

mkdir output

npm install
npm run build

mv dist output