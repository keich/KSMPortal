<script setup lang="ts">
import { ref } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import SrmTable from '@/components/SrmTable.vue'

const paneMainVerticalSize = ref(localStorage.paneMainVerticalSize ?? 30)
const resizeMainVertical = ({ prevPane }) => {
  localStorage.paneMainVerticalSize = prevPane.size
}

const paneLeftHorizontalSize = ref(localStorage.paneLeftHorizontalSize ?? 30)
const resizeLeftHorizontal = ({ prevPane }) => {
  localStorage.paneLeftHorizontalSize = prevPane.size
}

</script>

<template>
	<splitpanes class="custom-theme" @resized="resizeMainVertical">
		<pane :size="paneMainVerticalSize" style="min-width: 5%;">
		    <splitpanes horizontal @resized="resizeLeftHorizontal">
				<pane :size="paneLeftHorizontalSize"  style="min-height: 5%;">
					<SrmTable itemId="1" title="Дочерние объекты"/>
				</pane>
				<pane  style="min-height: 5%;">
					<SrmTable itemId="OI-551CD0FD6E0B487583A8C1B4DD8CEBDF" title="Родительские объекты"/>
				</pane>
			</splitpanes>
		</pane>
		<pane  style="min-width: 5%;">
			<span>2</span>
		</pane>
	</splitpanes>
</template>

<style>

.custom-theme {
	&.splitpanes .splitpanes__splitter {
			background-color: var(--color-background-mute);
			box-sizing: border-box;
			position: relative;
			flex-shrink: 0;
		} 
}
</style>
