FROM node:16-slim

LABEL description="Urban Utopia 2024 (Frontend)" \
      version="1.0" \
      maintainer="TheSuncatcher222" \
      deployer="https://github.com/TheSuncatcher222/"

WORKDIR /app

COPY . ./

RUN npm i

RUN npm run build
