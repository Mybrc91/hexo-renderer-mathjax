# MathJax Renderer Plugin for Hexo

Clone from [phoenixcw](https://github.com/phoenixcw/hexo-renderer-mathjax) and update.

Add support of [MathJax](http://www.mathjax.org/) for [Hexo](http://hexo.io/).

## INSTALL

    $ npm install hexo-renderer-mathjax2 --save

## CONFIG

If you want to customize the mathjax js src, Edit `_config.yml`,replace cdn url like below.:

    mathjax:
      cdn: 'https://cdn.bootcss.com/mathjax/2.7.1/MathJax.js'
      version: "v3"

If you want to use mathjax 3.0+, add version config value equals "v3" ,else empty this value.

Notice: Cdn config value and version config value  need to match each other. 


## Sample

Write the following latex code:

    $$
    \frac{\partial u}{\partial t} = h^2 \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}\right)
    $$

Then you will get:

![sample](https://raw.githubusercontent.com/Mybrc91/hexo-renderer-mathjax/master/sample.png)
