FROM node:slim AS base

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package.json ./
RUN pnpm install

# dev server
FROM base AS dev
CMD pnpm install && pnpm run dev --host

# build by default
FROM base
CMD pnpm run build
