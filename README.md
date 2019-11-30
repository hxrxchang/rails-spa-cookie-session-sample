# rails-spa-cookie-session-sample

このリポジトリは [Classi Advent Calendar 2019](https://qiita.com/advent-calendar/2019/classi) 1 日目の記事のサンプルアプリケーションです。  
Single Page Application と Rails API で cookie + session を用いた認証方法を説明します。

# Rails API サーバーの立ち上げ

```
bundle install --path=vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails s
```

# Angular ローカルサーバーの立ち上げ

```
cd frontend/angular
yarn
yarn start
```
