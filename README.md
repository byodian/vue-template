# vue-template

## [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

## eslint
使用 eslint 检查 HTML、JS 代码格式

### 设置 vscode
保存文件时自动修改

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```

## stylelint
使用 stylelint 检查 CSS 代码，参考 `stylelint.config.js`

### 安装依赖
npm 命令
```bash
npm install --save-dev stylelint-config-html stylelint-config-recommended-vue stylelint-config-standard-scss postcss-html postcss@^8.3.3 stylelint stylelint-config-standard stylelint-config-recess-order
```

yarn 命令
```bash
 yarn add --dev  stylelint-config-html stylelint-config-recommended-vue stylelint-config-standard-scss postcss-html postcss@^8.3.3 stylelint stylelint-config-standard stylelint-config-recess-order
```

### 设置 vscode
保存文件时自动修改

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
  },
}
```

## Mock data
### 使用 [json-server](https://github.com/typicode/json-server) 创建一个具有完整 REST API 功能的接口。
1. 安装依赖
   使用 npm 
   ```bash
    npm install --save-dev json-server
   ```
2. 新建 `db.json` 文件
   ```json
    {
      "people": [
        {
          "id": 1,
          "name": "byo",
          "age": 12
        },
        {
          "id": 2,
          "name": "dian",
          "age": 23
        }
      ],
      "posts": [
        {
          "userId": 1,
          "id": 1,
          "title": "vue 开发指南",
          "content": "vue 开发指南"
        }
      ]
    }
   ```
3. 设置 npm script，`package.json`
    ```json
    {
        "script": {
          "json:server": "json-server --watch db.json -p 3000"
        }
    }
    ```
4. 启动服务器，终端运行命令 `npm run json:server`
5. 开始 api 请求
   ```js
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => console.log(data))
   ```
### 使用现有 Fake REST API
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
- [My JSON Server](https://my-json-server.typicode.com/)

### Mock API
- [Mirage JS](https://github.com/miragejs/miragejs)
- [nuysoft/Mock](https://github.com/nuysoft/Mock)

## 参考链接
- [4 ways to fake an API in frontend development](https://www.valentinog.com/blog/fake/)
- [Tests and mocking the API](https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/docs/tests.md#the-mock-api)
- [Mock object](https://en.wikipedia.org/wiki/Mock_object)
