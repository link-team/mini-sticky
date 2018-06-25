# mini-sticky

A sticky pollyfill for mini-program.

## usage

```bash
$ npm install mini-sticky -S
```

```json
"usingComponents": {
    "sticky": "mini-sticky/es/index"
  }
```


```html
<sticky scrollTop="{{scrollTop}}" className="sticky" threshold="0">
  <view style="height: 40px; line-height: 40px; background: #eee; width: 100vw; text-align: center">这个是sticky</view>
  <view style="height: 40px; line-height: 40px; background: #eee; width: 100vw; text-align: center" slot="stick-faker">这个是sticky</view>
</sticky>
```
