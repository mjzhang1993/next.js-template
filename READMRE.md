# next.js-template
next.js 实现 react 服务器端渲染

### 命令
```bash
  yarn run dev # 开发
  yarn run build # 生产
  yarn run start # 部署
```

### 目录说明

```bash
├── components # 展示组件
│   └── About # 按照页面组件区分
│       └── index.js
├── modules # reducer 和 action
│   ├── about # 按照页面区分
│   │   ├── actions.js
│   │   └── reducer.js
│   ├── reducers.js # 总的reducer
│   └── types-constant.js
├── pages # 页面组件
│   ├── about.js
│   └── index.js
├── server.js # 开发服务器
├── static # 静态资源
│   └── test.png
├── store # 创建store
│   └── initializeStore.js

```
