<template>
  <div class="box profBox xl:pl-80 xl:pr-80 xl:pt-8 transition-all">
    <div class="card shadow-xl image-full">
      <figure>
        <img src="../assets/shaderbg1.webp" class="rounded-2xl" />
      </figure>
      <div class="justify-end card-body">
        <h1 class="card-title text-3xl text-info">Skyhouse+</h1>
        <p>
          Skyhouse+ is our way of having a premium on our services. The profits
          from this go solely towards maintaining the service and future
          projects. By subscribing to Skyhouse+ you are directly supporting us
          and you also receive benefits
        </p>
        <div class="p-3">
          <p class="card-title text-lg">Benefits Include:</p>

          <p>- No profit cap on BIN to BIN flips</p>
          <p>- Filters</p>
          <p>- Increased ratelimit</p>
          <p>- Chroma on the mod (if using SBA version 1.6.0)</p>
          <p>- Access to cool-chat</p>
          <p>- Future perks</p>
        </div>
        <div class="card-actions">
          <a v-if="skyhousePlus" class="btn btn-info btn-disabled"
            >You already have Skyhouse+</a
          >

          <label
            for="skyHouseBuy"
            class="transition btn btn-info"
            v-if="!skyhousePlus"
            >Purchase Skyhouse+</label
          >
          <input type="checkbox" id="skyHouseBuy" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <h1 class="card-title text-2xl">Choose your payment gateway.</h1>
              <p>
                You will be redirected to the gateway to complete your purchase.
              </p>
              <div class="flex flex-row">
                <a href="#" class="card shadow-xl image-full pt-6">
                  <figure>
                    <img src="../assets/stripe.jpg" class="rounded-2xl" />
                  </figure>
                  <div
                    class="btn-block btn-ghost rounded-2xl card-body transition"
                  >
                    <h2 class="card-title">Card/Paypal (Recommended)</h2>
                  </div>
                </a>
                <label
                  for="Patreond"
                  href="#"
                  class="card shadow-xl image-full pt-6 mx-3"
                >
                  <figure>
                    <img src="../assets/pt.png" class="rounded-2xl" />
                  </figure>
                  <div
                    class="btn-block btn-ghost rounded-2xl card-body transition"
                  >
                    <h2 class="card-title">Patreon (Deprecated)</h2>
                  </div>
                </label>
              </div>
              <div class="modal-action">
                <label for="skyHouseBuy" class="btn btn-ghost">Close</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="checkbox" id="Patreond" class="modal-toggle" />
    <div class="modal pt-44">
      <div class="modal-box bg-base-200">
        <p>
          Patreon is a deprecated payment gateway. Support will be dropped in a
          future version. Please only continue if you know what you're doing!
        </p>
        <div class="modal-action">
          <a
            href="https://www.patreon.com/skyblock_tools"
            class="btn btn-ghost hover:text-error"
            >Procceed</a
          >
          <label for="Patreond" class="btn btn-outline btn-secondary"
            >Back</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkyhousePlus",
  data() {
    return {
      mode: this.$root.navbar.mode,
      profile: this.profile,
      username: this.username,
      token: this.token,
      skyhousePlus: this.skyhousePlus,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$root.navbar.isLoggedIn;
    },
    isNotLoggedIn() {
      return !this.isLoggedIn;
    },
  },
  mounted() {
    document.title = "Upgrade - Skyhouse";
    const session_data = JSON.parse(
      window.localStorage.getItem("user_session_data")
    );
    if (session_data == null) {
      return;
    }
    this.profile =
      "https://cdn.discordapp.com/avatars/" +
      session_data["discord_info"].id +
      "/" +
      session_data["discord_info"].avatar +
      ".webp?size=512";
    this.username = session_data["discord_info"].username;
    this.skyhousePlus = session_data["privilege_level"] > 1;
    this.$nextTick(function () {
      fetch("https://api.skyblock.tools/api/auth/token/info", {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(window.localStorage.getItem("user_session_data"))
              .access_token,
        },
      })
        .then((x) => x.json())
        .then((x) => {
          this.token = "/shst " + x["mod_refresh_token"] + " site";
        });
    });
  },
  methods: {
    genToken() {
      this.token = "Please wait...";
      fetch("https://api.skyblock.tools/api/auth/token/reset", {
        method: "DELETE",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(window.localStorage.getItem("user_session_data"))
              .access_token,
        },
      })
        .then((x) => x.json())
        .then((x) => {
          this.token = "/shst " + x["mod_refresh_token"] + " site";
          createToast(
            {
              title: "Generated new token!",
              description: "Click to copy the token!",
            },
            {
              position: "bottom-right",
              showIcon: "true",
              type: "success",
              transition: "slide",
              hideProgressBar: "true",
              timeout: 4000,
            }
          );
        });
    },
    copyToken() {
      var TempText = document.createElement("input");
      TempText.value = this.token;
      document.body.appendChild(TempText);
      TempText.select();

      document.execCommand("copy");
      document.body.removeChild(TempText);
      createToast(
        {
          title: "Copied to clipboard!",
          description: "Paste this in-game chat!",
        },
        {
          position: "bottom-right",
          showIcon: "true",
          type: "success",
          transition: "slide",
          hideProgressBar: "true",
          timeout: 5000,
        }
      );
    },
    logout() {
      window.localStorage.removeItem("user_session_data");
      window.location.reload();
    },
  },
};
</script>
