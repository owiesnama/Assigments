<script setup>
import { reactive, ref } from 'vue'

let isVisable = ref(false)

let contact = reactive({
	name: '',
	phone: '',
})
</script>
<template>
	<div
		id="add-contact-modal"
		tabindex="-1"
		class="overflow-y-auto overflow-x-hidden bg-black/40 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
		aria-modal="true"
		role="dialog"
	>
		<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow">
				<!-- Modal header -->
				<div
					class="flex justify-between items-start p-4 rounded-t border-b"
				>
					<h3 class="text-xl font-semibold text-gray-900">
						Terms of Service
					</h3>
					<button
						@click="$emit('close')"
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="defaultModal"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-6 space-y-6">
					<input
						v-model="contact.name"
						class="flex px-2 py-4 rounded w-full border border-solid border-gray-400"
						type="text"
						name="name"
						placeholder="Contact name"
					/>
					<input
						v-model="contact.phone"
						class="flex px-2 py-4 rounded w-full border border-solid border-gray-400"
						type="number"
						name="number"
						placeholder="Contact number"
					/>
				</div>
				<!-- Modal footer -->
				<div
					class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200"
				>
					<button
						@click="$emit('submit', contact)"
						data-modal-toggle="defaultModal"
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						I accept
					</button>
					<button
						@click="$emit('close')"
						data-modal-toggle="defaultModal"
						type="button"
						class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
