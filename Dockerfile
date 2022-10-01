FROM node:16.15.0-alpine
ENV LANG=C.UTF-8
WORKDIR /kiosk-react-app
# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["yarn", "start"]