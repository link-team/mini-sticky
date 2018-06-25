# mini-sticky

A sticky pollyfill for mini-program.

## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| scrollTop | 实时传入的滚动条卷起高度 | number | null | true |
| top | 固定时距离顶部高度 | number | 0 | false |
| className | 类名 | string | null | true |

## Usage

```bash
$ npm install mini-sticky -S
```

```json
"usingComponents": {
    "sticky": "mini-sticky/es/sticky/index"
  }
```


```html
<sticky scrollTop="{{scrollTop}}" className="sticky" top="0">
  <view style="height: 40px; line-height: 40px; background: #eee; width: 100vw; text-align: center">这个是sticky</view>
  <view style="height: 40px; line-height: 40px; background: #eee; width: 100vw; text-align: center" slot="stick-faker">这个是sticky</view>
</sticky>
```
