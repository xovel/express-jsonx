# express-jsonx

An opinionated express middleware just extend res.json.

## Install

```bash
npm install express-jsonx
```

## Usage

```js
const express = require('express')
const jsonx = require('express-jsonx')

const app = express()
app.use(jsonx())

app.get('/', function (req, res) {
  res.jsonx(1, 'Hi~')
})
```

- `res.jsonx(1)` <=> `res.json({code: 0, data: 1})`
- `res.jsonx({demo: true})` <=> `res.json({code: 0, data: {demo: true}})`
- `res.jsonx(1, 'text')` <=> `res.json({code: 1, data: 'text'})`
- `res.jsonx(-1, '', 'fail')` <=> `res.json({code: -1, data: '', msg: 'fail'})`

## Options

```js
app.use(jsonx(options))
```

| name | type | default | note |
| ---- | ---- | ------- | ---- |
| codeKey | string | `code` | key of code |
| dataKey | string | `data` | key of data |
| msgKey | string | `msg` | key of message |
| defaultCode | number | `0` | default code |

## License

MIT(./LICENSE)
