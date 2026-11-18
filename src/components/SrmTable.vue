<script setup lang="ts">
import { shallowRef, onMounted, watch, defineProps } from 'vue'
import type { IItem } from "@/types/IItem.ts"
import ItemRepository from '@/api/ItemRepository.ts'
import Card from "@/components/Card.vue"

const items = shallowRef<IItem[]>([]);
const props = defineProps({
	itemId: {
		type: String,
		required: true
	}
})

function loadItems(itemId: String) {
	ItemRepository.getChildren(itemId, ['id', 'name','status'])
			.then(data => {
				return data.sort((a,b) => {
					return a.name.localeCompare(b.name)
				})
			})
			.then(data => {
				items.value = data
				console.log(data)
			})	
}

onMounted(() => {
	loadItems(props.itemId)
})
	
watch(() => props.itemId, (first, second) => {
  loadItems(props.itemId)
})

</script>

<template>
	<Card>
		<div class="items">
			<div v-for="item in items">
			{{item.name}}
			</div>
		</div>
	</Card>
</template>


<style scoped>
.items {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	white-space: nowrap;
	overflow-x: hidden;
	overflow-y: auto;
}



</style>
