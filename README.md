# electron + vue3 + vite + ts Template

## 安装依赖

```bash
pnpm install
```
## 启动项目

```bash
pnpm dev
```

## 打包（根据需要打包）
```bash
pnpm build:win32 | win64 | mac | linux
```

# 无法安装electron

在通过`pnpm`安装`electron`后，启动项目，会发现`electron`没有找到：

```text
Error: Electron failed to install correctly, please delete node_modules/electron and try installing again
    at getElectronPath (D:\hg\Code\electron-proj\node_modules\.pnpm\electron@35.1.0\node_modules\electron\index.js:17:11)
    at Object.<anonymous> (D:\hg\Code\electron-proj\node_modules\.pnpm\electron@35.1.0\node_modules\electron\index.js:21:18)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Module.require (node:internal/modules/cjs/loader:1311:12)
    at require (node:internal/modules/helpers:136:16)

Node.js v22.14.0
```

## 解决方法

前往`https://github.com/electron/electron/releases`下载对应版本的`electron`安装包，比如`electron-v35.1.0-win32-x64.zip`，
修改`node_modules/electron/install.js`文件：

```js
// downloads if not cached
// downloadArtifact({
//   version,
//   artifactName: 'electron',
//   force: process.env.force_no_cache === 'true',
//   cacheRoot: process.env.electron_config_cache,
//   checksums: process.env.electron_use_remote_checksums ?? process.env.npm_config_electron_use_remote_checksums ? undefined : require('./checksums.json'),
//   platform,
//   arch
// }).then(extractFile).catch(err => {
//   console.error(err.stack);
//   process.exit(1);
// });
extractFile("lib/electron-v35.1.0-win32-x64.zip"); // 替换为下载的安装包路径
```
执行`node node_modules/electron/install.js`，此操作会将electron的安装包解压到`node_modules/electron/dist`目录下。
重新启动项目即可。

## 参考文档

> https://bbs.huaweicloud.com/blogs/352676
> https://blog.csdn.net/u010982507/article/details/101236913