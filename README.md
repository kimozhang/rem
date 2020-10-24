# Rem
Convert unit px to rem.

## Install

```bash
$ npm i @sky/rem
# or
$ yarn add @sky/rem
```

## CDN

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@sky/rem/dist/rem.min.js"></script>
```

## Example

### Invoke

```js
const Rem from '@sky/rem'

Rem.init()
```

### CSS

If there is a named header element in design, the width and height are 100px and 30px respectively. When the base option is set to 100 which is also default and recommended, You can know its value by simple calculations and write as blow:

```css
.header {
  width: 1rem;  /* 1rem = 100 / 100  */
  height: .3rem;  /* .3rem = 30 / 100 */
}
```

## API

- init(options?: Object): init rem.

## Options

- designWidth: width of design. default is 750.
- base: baseline. default is 100 and recommended.
- maxWidth: max width of client. default is null, when it is set and more than it, the rem will keep constant.

# License

[MIT](LICENSE)

