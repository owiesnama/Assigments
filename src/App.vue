<script setup>
import { ref } from 'vue'
import Contacts from './components/Contacts.vue'
import NewContact from './components/NewContact.vue'
import { useStorage } from './composables/useStorage';

let isAddingContact = ref(false)
let contacts = useStorage('contacts',[])

let saveContact = (payload) => {
	isAddingContact.value = false
  console.log(contacts)
  contacts.push(payload)
}
</script>

<template>
	<main>
		<div class="container mx-auto px-2 md:px-0 mt-4">
			<button
				class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				data-modal-toggle="add-contact-modal"
				@click="isAddingContact = true"
			>
				New Contact
			</button>
			<NewContact
				v-if="isAddingContact"
				@submit="saveContact"
				@close="isAddingContact = false"
			/>
			<Contacts :contacts="contacts"/>
		</div>
	</main>
</template>
