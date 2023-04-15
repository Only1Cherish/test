<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>

  <el-button type="success" @click="count++">count is {{ count }}</el-button>

 
</template>
