FROM node:slim
COPY / /

RUN apt update && apt install -y wget
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN apt-get install apt-transport-https
RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt-get update && sudo apt-get install -y logstash

RUN npm install yarn
RUN yarn install
RUN yarn build
ENTRYPOINT yarn start
