FROM node:12 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npx next telemetry disable
RUN npm run build


FROM node:12-slim as app

WORKDIR /usr/src/app
ENV TZ=Europe/Oslo
RUN export DEBIAN_FRONTEND=noninteractive && \
  printf '%s\n' "$TZ" > /etc/timezone && \
  dpkg-reconfigure tzdata && \
  > /var/log/lastlog && > /var/log/faillog

COPY package*.json ./
RUN npm install --only=production
COPY public ./public
#COPY pages ./pages
COPY --from=builder /usr/src/app/dist ./
COPY --from=builder /usr/src/app/.next ./.next

USER node

EXPOSE 4000
ENV NODE_ENV=production
CMD ["node", "server/index.js"]