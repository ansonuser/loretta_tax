# Loretta Wang, EA — 個人網站

純靜態網站(HTML/CSS/JS),以 GitHub Pages 部署。

## 啟用部署
1. 合併到 `main`
2. GitHub repo → Settings → Pages → Source 選 **GitHub Actions**
3. 之後每次 push 到 `main` 自動發布

## 待補內容(搜尋 `TODO`)
- 照片:放 `assets/img/loretta.jpg`,替換 `index.html` 內 `.portrait` 的 LW
- 學經歷、收費方式
- Facebook 網址、Calendly 連結(`#fb-link`、`#cal-link`)

## 自訂網域
新增 `CNAME` 檔,內容為網域(如 `www.apexglobaltax.com`),並在 DNS 設定 CNAME 指向 `ansonuser.github.io`。

## 本機預覽
`python3 -m http.server 8000`
