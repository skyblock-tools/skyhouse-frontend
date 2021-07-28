<template>
  <div class="alert rounded-none" :class="alerttype">
    <div class="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="alerticon"></path>
      </svg>
      <label>{{ msg }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Announcement",
    data() {
      return {
        msg: "",
        alerttype: "alert-warning hidden",
        alerticon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      }
    },
    mounted() {
      window.announcement = this
      window.announce = function (message, alertLevel){
        window.announcement.msg = message
        window.announcement.$el.style.marginTop = "0px";
        window.announcement.$el.style.display = "block";
        if(alertLevel == 0){
          window.announcement.alerttype = "alert-info"
          window.announcement.alerticon = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }else if(alertLevel == 1){
          window.announcement.alerttype = "alert-warning"
          window.announcement.alerticon = "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        }else if(alertLevel == 2){
          window.announcement.alerttype = "alert-error"
          window.announcement.alerticon = "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        }
      }
      this.$nextTick(function () {
        announce("Skyhouse is currently in beta. Report all bugs to the team. Thanks!", 1)
      })
    }
  }
</script>