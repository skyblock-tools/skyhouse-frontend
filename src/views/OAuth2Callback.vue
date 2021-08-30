<template>
  <div class="dynaoauth-msg">
  </div>
</template>

<script>
export default {
  name: "OAuth2Callback",
  created() {
    if(window.location.href.includes("error")){
      window.close();
    }
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    httpGetAsync(`https://api.skyblock.tools/api/auth/oauth/discord?code=${code}`, function(res){
      const json = res.responseText;
      window.localStorage.setItem('user_session_data', json);
      window.close();
    });

    function httpGetAsync(theUrl, callback) {
      if(window.location.href.includes("localhost")) {
        theUrl += "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fskyhouse%2Foauth_callback%2F";
      }
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp);
      }
      xmlHttp.open("GET", theUrl, true);
      xmlHttp.send(null);
    }
  },
  mounted() {
    this.$nextTick(function() {
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
      self.resizeTo(0,0);
    });
  }
}
</script>