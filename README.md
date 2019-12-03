# rails-spa-cookie-session-sample

このリポジトリは [Classi Advent Calendar 2019 1日目](https://qiita.com/hxrxchang/items/d51a27f486fcd1612dbf) の記事のサンプルアプリケーションです。  
Single Page Application と Rails API で cookie + session を用いた認証方法を説明します。

## Rails API サーバーの立ち上げ

```
bundle install --path=vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails s
```

## Angular ローカルサーバーの立ち上げ

```
cd frontend/angular
yarn
yarn start
```
