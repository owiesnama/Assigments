<script setup>
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'
let search = $ref('')
let props = defineProps({
	contacts: Array,
})

let filteredContact = computed(() => {
	return props.contacts.filter(
		(contact) =>
			contact.name.toUpperCase().indexOf(search.toUpperCase()) >= 0 ||
			contact.phone.toString().indexOf(search) >= 0
	)
})
</script>
<template>
	<div class="flex">
		<div class="py-4 flex-1">
			<input
				v-model="search"
				type="text"
				class="outline-blue-200 border rounded p-2 block w-full"
				placeholder="Adam Wathan..."
			/>
		</div>
	</div>

	<ul>
		<li
			class="flex justify-between items-center"
			v-for="contact in filteredContact"
		>
			<dl class="flex space-x-4 items-center">
				<dt>
					<div class="w-16 rounded-full overflow-hidden border-2">
						<img
							alt="Contact Avatar"
							:src="'https://i.pravatar.cc/300?u=' + contact.name"
						/>
					</div>
				</dt>
				<dt class="flex flex-col">
					<span
						class="text-gray-600 font-sans"
						v-text="contact.name"
					></span>
					<span
						class="text-gray-400 font-sans"
						v-text="contact.phone"
					></span>
				</dt>
			</dl>
			<div class="space-x-4">
				<button
					aria-label="Call"
					class="bg-blue-400 rounded text-white py-1 px-4 md:w-32"
				>
					Call
				</button>
				<button
					aria-label="Call"
					class="border border-blue-400 rounded text-blue-400 py-1 px-4 md:w-32"
				>
					Message
				</button>
			</div>
		</li>
	</ul>
</template>
