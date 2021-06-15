var path = require('path');
var ejs = require('ejs');
var fs = require('hexo-fs');



var layout = 'layout.ejs';
var bodyTag = '</body>';
var mathjaxScriptV3 = fs.readFileSync(path.join(__dirname, 'mathjax-v3.html'));
var mathjaxScript = fs.readFileSync(path.join(__dirname, 'mathjax.html'));

hexo.extend.renderer.register('ejs', 'html', function(data, options) {
    var path = options.filename = data.path;
    var content = data.text;
    if (!isEmpty(hexo.config.mathjax) && !isEmpty(hexo.config.mathjax.version) && hexo.config.mathjax.version =="v3") {
        if (!isEmpty(hexo.config.mathjax.cdn)) {
            content = content.replace(bodyTag, mathjaxScriptV3 +'\n' +'<script async src="' + hexo.config.mathjax.cdn + '" id="MathJax-script"></script>' +'\n' + bodyTag);
        }else{
            content = content.replace(bodyTag, mathjaxScriptV3
            +'<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script"></script>' +'\n' + bodyTag);
        }

    }else {
       if (!isEmpty(hexo.config.mathjax) && !isEmpty(hexo.config.mathjax.cdn)) {
            content = content.replace(bodyTag, mathjaxScript +'\n' +'<script src="' + hexo.config.mathjax.cdn + '?config=TeX-AMS-MML_HTMLorMML"></script>' +'\n' + bodyTag);
        }else{
            content = content.replace(bodyTag, mathjaxScript
            +'<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>' +'\n' + bodyTag);
        } 
    }
    
    return ejs.render(content, options);
},true);

function isEmpty(obj)
{
    if (obj!==null && obj !==undefined && obj!=='') {
        return false;
    }
    return true;

};
