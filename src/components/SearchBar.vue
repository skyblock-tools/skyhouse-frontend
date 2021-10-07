<template>
  <div>
    <div class="flex-1 lg:flex-none">
      <div class="form-control">
        <input
          type="text"
          placeholder="Player/Item Search"
          class="input input-ghost w-96 searchBar"
        />
        <div class="searchSuggestions bg-neutral w-96 shadow-lg">
          <!--          <div class="badge badge-primary badge-lg block">Recent</div>-->
          <div class="badge badge-secondary badge-lg block">Suggested</div>
          <div class="searchItem">
            <img
              class="bg-neutral itemShowcase playerShowcase"
              src="https://mc-heads.net/avatar/johndoesdev"
            />
            <span class="itemDesc"
              >JohnDoesDev
              <div class="badge badge-outline rarity devBadge">
                DEVELOPER
              </div></span
            >
          </div>
          <div class="searchItem">
            <img
              class="bg-neutral itemShowcase"
              src="https://hypixel-skyblock-item-images.pages.dev/CRYSTAL_FRAGMENT.webp"
            />
            <span class="itemDesc"
              >Crystal Fragment
              <div
                style="color: rgb(124, 58, 170)"
                class="badge badge-outline rarity"
              >
                EPIC
              </div></span
            >
          </div>
          <div class="searchItem">
            <img
              class="bg-neutral itemShowcase"
              src="https://hypixel-skyblock-item-images.pages.dev/BLUE_WHALE_PET.webp"
            />
            <span class="itemDesc"
              >Blue Whale
              <div
                style="color: rgb(245, 158, 11)"
                class="badge badge-outline rarity"
              >
                LEGENDARY
              </div></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style>
.searchBar:focus + .searchSuggestions {
  opacity: 1;
  pointer-events: all;
}

.searchSuggestions {
  height: 310px;
  z-index: 999;
  margin-top: 48px;
  position: absolute;
  opacity: 0;
  transition: 0.2s ease;
  padding: 10px 10px;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow-y: auto;
  scrollbar-width: auto;
  scrollbar-color: #6d6c7a #22212c;
  pointer-events: none;
  border: 1px solid rgb(48, 47, 61);
}

.searchSuggestions::-webkit-scrollbar {
  width: 16px;
}

.searchSuggestions::-webkit-scrollbar-track {
  background: #22212c;
  border-radius: 0.5rem;
}

.searchSuggestions::-webkit-scrollbar-thumb {
  background-color: #6d6c7a;
  border-radius: 10px;
  border: 5px solid #22212c;
}

.searchBar {
  border-radius: 0.5rem 0.5rem 0 0 !important;
}

.searchItem {
  width: calc(100% - 20px);
  height: 80px;
  background-color: rgb(48, 47, 61);
  border-radius: 0.5rem;
  margin: 10px 10px;
  overflow: hidden;
  box-shadow: inset 0 0 4px #000;
  cursor: pointer;
  transition: 0.3s ease;
}

.itemShowcase {
  width: 50px;
  height: 50px;
  object-fit: scale-down;
  margin: 15px;
  border-radius: 0.5rem;
  padding: 5px 5px;
  box-shadow: 0 0 3px #000;
  display: inline-block;
}

.playerShowcase {
  padding: 0 0;
  box-shadow: 0 0 0;
}

.rarity {
  float: right;
  margin-top: 30px;
  margin-right: 10px;
  font-weight: 600;
}

.devBadge {
  color: coral !important;
}
</style>