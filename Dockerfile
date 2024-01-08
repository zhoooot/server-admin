FROM node:18-alpine as builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --production

COPY --from=builder /app/dist ./dist

ENV DATABASE_URL=

RUN echo "#!/bin/sh" > /app/entrypoint.sh
RUN echo "pnpm run start:prod:typeorm" >> /app/entrypoint.sh
RUN echo "pnpm run start:prod" >> /app/entrypoint.sh

EXPOSE 4001
CMD ["sh", "/app/entrypoint.sh"]
