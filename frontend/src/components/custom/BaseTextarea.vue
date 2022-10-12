<template lang="">
    <div id="base-textarea">
    <label v-if="label">{{label}}</label>
    <textarea name="messgae" id="" cols="30" rows="10"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        }
    }
    
}
</script>
<style lang="scss">
    #base-textarea {
        display: flex;
        flex-direction: column;
    }
</style>