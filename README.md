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

  palattine("lead", {
    // need email or phone
    email: "",
    phone: "",
    // name is optional
    name: "",
  }, metadata)

  // Gets the contact info based on the local fingerprint ID
  palattine("get_contact_info").then(contactInfo => console.log(contactInfo)

  palattine('get_config') // Returns palattine local config
</script>
```

### To set user props via URL
https://URL.com?pltt=SET_USER_ID&email=SET_USER_EMAIL&phone=SET_USER_PHONE
