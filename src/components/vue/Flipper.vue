<template>
	<div class="box" v-if="isLoggedIn">
		<div class="grid layout">
			<Sidebar />
			<FlipGrid />
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import FlipGrid from './FlipGrid.vue';

export default {
	name: 'Flipper',
	components: {
		FlipGrid,
		Sidebar,
	},
	data() {
		return {
			mode:
				JSON.parse(window.localStorage.getItem('user_session_data')) == null
					? 1
					: JSON.parse(window.localStorage.getItem('user_session_data')).privilege_level == 0
					? 2
					: 1,
		};
	},
	computed: {
		isLoggedIn() {
			return true;
		},
		isNotLoggedIn() {
			return !this.isLoggedIn;
		},
	},
	mounted() {
		document.title = 'Flipper - Skyhouse';
	},
};
</script>

<style>
.layout {
	grid-template-columns: min-content auto;
	height: 0;
}
</style>
