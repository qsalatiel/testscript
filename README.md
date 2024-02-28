```html
<script>
  (function(e,t,n,o,a){function c(){if(!t.getElementById(o)){const e=t.getElementsByTagName(n)[0],a=t.createElement(n);a.id=o,a.src="https://cdn.jsdelivr.net/gh/qsalatiel/testscript/sdk.js",a.async=1,e.parentNode.insertBefore(a,e)}}let i=function(){i.q.push(arguments)};i.q=[[o,a]],"function"!=typeof e[o]&&(e[o]=i,"complete"===t.readyState?c():e.addEventListener("load",c,!1))})(window,document,"script","palattine","CLIENT_ID");
</script>


<script>
  //  Optional
  var metadata = {}

  palattine("ping");
  
  palattine("pageview", metadata)
  
  palattine("custom_event", metadata);

  palattine('get_config')
</script>
```

### To set user props via URL
https://URL.com?pltt=SET_USER_ID&email=SET_USER_EMAIL&phone=SET_USER_PHONE
