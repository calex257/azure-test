#!/bin/bash

cd frontend && npm install && npm run build
cp -r build ../app_src/public && cd ../app_src && npm start
