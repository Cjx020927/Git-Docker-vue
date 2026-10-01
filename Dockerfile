# 阶段1：打包vue项目
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 阶段2：用nginx托管dist静态文件
FROM nginx:alpine
# 把打包产物复制进nginx网页目录
COPY --from=build /app/dist /usr/share/nginx/html
# 复制nginx配置，处理vue单页路由（防止刷新404）
RUN echo 'server { listen 80; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
