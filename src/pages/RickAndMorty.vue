<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import Pagination from '../components/Pagination.vue';

const characters = ref([]);
const info = ref({});
const currentPage = ref(1);
const searchValue = ref('');
const error = ref('');
let searchTimeout = null;


await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters() {
    try {
        let responce = await axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: currentPage.value,
                name: searchValue.value,
            }
        });
        console.log(responce.data);
        characters.value.push(...responce.data.results);
        info.value = responce.data.info;
    } catch (err) {
        console.log(err);
        characters.value = responce.data.results;
        characters.value = 'No results found';
        info.value = null;
    }
}


async function next() {
    currentPage.value++;
    await getCharacters();
}
async function prev() {
    currentPage.value--;
    await getCharacters();
}

async function page(page) {
    currentPage.value = page;
    await getCharacters();
}
async function search() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        error.value = '';
        currentPage.value = 1;
        characters.value = [];
        await getCharacters();
    }, 1000);

}

onMounted(() => {
    document.addEventListener('scroll', () => {
        if(window.scrollY + window.innerHeight > document.body.clientHeight - 300) {
            next();
        }
    })
});

</script>
<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @input="search" v-model="searchValue" class="input" type="text" placeholder="Find a character">
        </div>
        <div class="control">
            <button @click="search" class="button is-info">
                Search
            </button>
        </div>
    </div>
    <Pagination v-if="info" :info="info" :current="currentPage" @next="next" @prev="prev" @page="page"></Pagination>
    <div class="columns columns is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
    <h1 v-if="error" class="is-size-1">{{ error }}</h1>
</template>