<template>
  Please wait...
</template>

<script>
export default {
  created() {
    if(window.location.href.includes("error")){
      window.close();
    }
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    httpGetAsync(`https://api.skyblock.tools/auth/oauth/create?code=${code}`, function(res){
      const json = res.responseText;
      window.localStorage.setItem('user_session_data', json);
      window.close();
    });

    function httpGetAsync(theUrl, callback) {
      if(window.location.href.includes("localhost")) {
        theUrl += "&allowLocalhostRedirectURI=yes";
      }
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp);
      }
      xmlHttp.open("GET", theUrl, true);
      xmlHttp.send(null);
    }
  }
}
</script>