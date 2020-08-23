# sendblue-node
A node wrapper for the sendblue api

## Usage:
```js
const Sendblue = require('sendblue');

const sendblue = new Sendblue("API_KEY", "API_SECRET");

(async () => {
    const responseData = sendblue.sendText("+19999999999", "Hello World");
    
    console.log(responseData);
})();
```