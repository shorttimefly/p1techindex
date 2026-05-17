# AI Index

企业 AI 服务矩阵官网首页，作为 `D:\code\ai` 下各产品的统一入口。

## 定位

- `index`：总官网 / 产品矩阵入口。
- `aip`：企业 AI 管理中台。
- `aiscm`：AI 供应链产品。
- `aieco`：AI 运营产品。
- `p1`：0 代码开发平台。

## 开发

```bash
npm install
npm run dev
```

默认入口为 `/`。当前 AIP 入口暂时指向 `/login?next=/aip`，后续部署拆分后可改成独立 AIP 域名或网关路由。
