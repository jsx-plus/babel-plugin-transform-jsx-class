# babel-plugin-transform-jsx-class

Support classnames with directive.

## Example

**In**

```jsx
import { createElement } from 'react';

export default function Foo(props) {
  const { message } = props;
  return (
    <div x-class={['foo', {
      bar: true,
      active: false,
    }]}>hello world</div>
  );
}
```

**Out**

```jsx
import { createElement } from 'react';

export default function Foo(props) {
  const { message } = props;
  return (
    <div className={classnames(['foo', {
	    bar: true,
	    active: false,
	  }])}>hello world</div>
  );
}
```

## Installation

```sh
$ npm install babel-plugin-transform-jsx-class
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-jsx-class"]
}
```

### Via CLI

```sh
$ babel --plugins transform-jsx-class script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-jsx-class"]
});
```
