FROM node:lts
WORKDIR .
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 8000