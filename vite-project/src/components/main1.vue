<script>
export default {
        name: "Main1",
        methods:{
            getTest(){
                this.$axios.get("/test").then(res=>{
                    console.log(res.data)
                })
            }
        }


    }

</script>

<template>
       <el-button type="primary" @click="getTest">get数据</el-button>
</template>

