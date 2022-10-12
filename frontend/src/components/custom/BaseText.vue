<template lang="">
    <div id="base-text">
        <label v-if="label">{{label}}</label>
        <input type={{type}} />
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: "",
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    }
    
}
</script>
<style lang="scss">
    #base-text {
        display: flex;
        flex-direction: column;
    }
</style>