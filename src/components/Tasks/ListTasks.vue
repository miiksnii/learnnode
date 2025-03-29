<script setup>

import {ref} from 'vue';

const props = defineProps(['tasks']);
const emit = defineEmits(['update:edit', 'delete'])


let isEdit = ref(props.tasks + 1);

let isDone = ref(false);
</script>

<template>
    <ul>
        <li v-for="(task, index) in tasks" class="column">
            <div class="card">
                <header class="card-header">
                    
                        <div v-if="index != isEdit">
                            <h1 class="card-header-title is-size-2 pt-4 px-5">{{ task.title }}</h1>
                        </div>
                        <div v-else>
                            <h1><input type="text" class="is-size-2 pt-4 px-5" name='title' :value="task.title"></h1>
                        </div>
                </header>
                <div class="card-content pt-3 px-5">
                    <div class="is-flex is-justify-content-space-between">
                        <div class="content">
                            <div v-if="index != isEdit">
                                <p class="is-size-5 pb-5">{{ task.desc }}</p>
                            </div>
                            <div v-else>
                                <input type="text" class="is-size-5 pb-5" name='desc' :value="task.desc">
                            </div>
                        
                        </div>

                        <label class="checkbox is-size-4">
                            COMPLETED
                            <input type="checkbox" style="width: 1.5rem; height: 1.5rem;" v-model="isDone"/>
                        </label>
                    </div>
                    <div class="mb-5">
                        <time class="is-size-6">Creation date: {{ task.created_at }}</time>
                    </div>
                    <footer class="card-footer">
                        <button
  v-if="isEdit == index" class="card-footer-item" @click="() => {emit('update:edit', { index, id:task.id, title: task.title, desc: task.desc, marked_as_done:isDone }); isEdit = -1}">Save</button>

                        <button v-if="isEdit != index" class="card-footer-item" @click="isEdit = index">Edit</button>

                        <button class="card-footer-item" @click="emit('delete', index)">Delete</button>
                    </footer>
                </div>
            </div>
        </li>
    </ul>
</template>

