<script setup>
 
import { computed, ref } from 'vue';
import ItemList from './itemList.vue';
 
 
let message = ref('');
let i = 1;
let items = ref([
   {id: i++, name: 'Piim', isDone: false},
   {id: i++, name: 'Viin', isDone: false},
   {id: i++, name: 'Õlu', isDone: false},
   {id: i++, name: 'Krõpsud', isDone: false},
]);
 
function addItem(){
    if(message.value.trim() !== ''){
        items.value.push({id: i++, name: message.value.trim(), isDone: false});
    }
    message.value = '';
}
 
let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
 
</script>
 
<template>
    <div class="container mt-2">
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add Item
                </button>
            </div>
        </div>
        <div class="content">
            <ItemList></ItemList>
 
 
            <h3>All Items</h3>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>
 
            <h3>Done items</h3>
            <ul>
                <li v-for="item in doneItems" :key="item.id">
                    {{ item }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>
 
            <h3>To do items</h3>
            <ul>
                <li v-for="item in toDoItems" :key="item.id">
                    {{ item }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>
        </div>
    </div>
</template>
 
<style></style>