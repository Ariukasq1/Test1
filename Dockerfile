FROM node:12.13.0-stretch-slim
WORKDIR /erxes-mn/
RUN chown -R node:node /erxes-mn
COPY --chown=node:node . /erxes-mn
USER node
EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]
