FROM node:20
WORKDIR /app
COPY package.json ./
COPY tailwind.config.ts ./
COPY styles ./styles
# RUN npm set registry https://registry.npmmirror.com/ && npm install --include=dev
COPY . .
RUN npm install --include=dev
RUN npm run build:css
RUN npm run build:ts
RUN npx tsc --version
EXPOSE 8080
 
CMD ["npm", "start"]

