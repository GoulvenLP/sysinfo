# STAGE COMPILATION

# original image
FROM alpine:3.15 AS builder

# working directory for docker (my choice)
WORKDIR /app

# install system packages
RUN apk update
RUN apk add npm
RUN apk add --no-cache nodejs


# copy physical project to container
COPY src/methods /app/src/methods
COPY src/index.ts /app/src/index.ts
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json

# dependencies installation
# isolate the dependencies we will keep
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules

# dependencies installation + compilation of code ...
RUN npm install
RUN npm run build

# RUNNER
FROM alpine:3.15 AS runner

# working directory
WORKDIR /app

# install node to be able to run the API
RUN apk add --no-cache nodejs

# add user node & group node
RUN addgroup -S node && adduser -S -G node node

# copy with node privileges
COPY --chown=node:node --from=builder /app/prod_node_modules /app/node_modules
COPY --chown=node:node --from=builder /app/dist /app/dist

# downgrade privileges
USER node

# execution
CMD ["node", "/app/dist/index.js"]