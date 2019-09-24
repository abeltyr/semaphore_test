FROM node:10.16.3

WORKDIR /semaphore_test

COPY package*.json ./

RUN yarn

COPY . /semaphore_test

COPY . .

EXPOSE 3000

CMD ["yarn", "start" ]


