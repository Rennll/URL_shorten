# 我的餐廳清單

一個使用 Express 和 Node.js 製作的短網址縮址網站，提供了簡易的縮短網址功能。

## 專案畫面

![image](/public/screenshot/index.jpg)
![image](/public/screenshot/result.jpg)

## Features - 產品功能

1. 提供使用者貼上網址並產生短網址。
2. 提供使用者一鍵複製短網址。

## Environment SetUp - 環境建置

1. [Node.js@16.14.2](https://nodejs.org/)
2. [Express@4.17.1](https://expressjs.com/)

## Installing - 專案安裝流程

1. 開啟 terminal ，將專案複製到本機。

```
git clone https://github.com/Rennll/URL_shorten.git
```

2. 使用 terminal 切換至下載的資料夾。

```
cd restaurant_list
```

3. 用 npm 下載在 package.json 提到的套件。

```
npm install
```

4. 請設定環境變數 MONGODB_URI 與 BASE_URL ，也就是資料庫的連線和提供轉址的網域名稱，如果在 Bash(windows) 指令為下
```
export MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.ps0rf.mongodb.net/URL-shorten?retryWrites=true&w=majority"
export export BASE_URL=<sever domain>"
```

5. 等待下載完成後，執行 app.js

```
npm run start
```

6. 等待伺服器啟動，並且出現以下字樣即代表成功運行。

```
This website is running on http://localhost:3000
```

7. 使用者即可在[http://localhost:3000](http://localhost:3000)使用。

## Contributor - 專案開發人員

[Rennll](https://github.com/Rennll)
