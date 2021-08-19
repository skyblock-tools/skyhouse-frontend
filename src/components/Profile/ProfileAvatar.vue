<template>
  <div class="force-square">
    <div class="card bg-neutral shadow-lg">
        <img class="profile-image bg-base-300" :src="profile">
    </div>
  </div>
</template>

<script>

export default {
  name: "ProfileAvatar",
  props: {
    profile: String
  },
}
</script>

<style>
.profile-image {
  width: 100%;
  margin: 0 auto 10px;
  padding: 10px;
  border-radius: var(--rounded-box,1.5rem);
}

.card {
  width: 100%;
  height: 0%;
  padding-bottom: 100%;
}

.force-square {
  margin: 5%;
  width: 90%;
  height: 0%;
  padding-bottom: 90%;
}
</style>