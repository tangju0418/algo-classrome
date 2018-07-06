# js #

## 搭建开发环境 ##

1. 安装 nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.bashrc
```

2. 安装 node 9.3.0

```
nvm install 9.3.0
nvm use 9.3.0
```

3. 安装 yarn

```
npm config set registry https://registry.npm.taobao.org
npm install -g pm2 yarn
yarn config set registry https://registry.npm.taobao.org
```

4. 安装依赖包

```
yarn install
```

5. 执行单元测试

```
yarn test
```