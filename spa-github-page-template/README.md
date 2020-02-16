# Description

My first next js website repo static [here](Githubb.com/matheusfrancisco/matheusfrancisco.github.io)

![image](https://github.com/matheusfrancisco/simple-projects-frontend/blob/master/spa-github-page-template/home.jpeg)


# Development

Run the following to start a development instance locally at port 3000
```
npm start
```


----

For SPA routing, I have written a wrapper around `next/link`, which makes `Link` easier to use for publish (use it to avoid the complexity in the `Publish` section below)

```javascript
import BasePathLink from '@helpers/BasePathLink';

export default function Home(){
  return (
    <BasePathLink href='/'><a>Test this SPA</a></BasePathLink>
  );
}
```

# Publish
Before publishing, do take a look at `next.config.js` for a crucial setting, depending on how you use Github Pages. 


```
npm run publish
```


----

