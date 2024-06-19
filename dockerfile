FROM node:18.20.3 

RUN mkdir -p /usr/src/nuxt-portfolio
WORKDIR /usr/src/nuxt-portfolio

COPY . /usr/src/nuxt-portfolio/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]