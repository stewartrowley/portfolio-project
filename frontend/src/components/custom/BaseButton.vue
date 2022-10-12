<template lang="">
    <button type={{type}}>{{label}}</button>
</template>
<script>
export default {
    props: {
        type:{
            type: String,
            default: '',
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="">
    
</style>