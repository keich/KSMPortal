<script setup lang="ts">
import { shallowRef, onMounted, watch, defineProps } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true
	}
})

</script>

<template>
	<div class="card">
		<div>
			<div class="card-header">
				{{props.title}}
			</div>
			<div class="card-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>


<style scoped>
.card {
    width: 100%;
    height: 100%;
	padding: 0.5em;

}

.card > div {
    border: 1px solid rgba(36, 41, 46, 0.12);
    border-radius: 6px;
    width: 100%;
    height: 100%;
	display: flex;
    flex-flow: column;
}

.card-content {
    width: 100%;
    height: 100%;
	padding: 0.5em;	
	overflow: hidden;
}

.card-header
{
	font-weight: bold;
    padding: 0.5em;
}
</style>
