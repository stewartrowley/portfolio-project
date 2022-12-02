<template lang="">
    <div id="base-textarea">
    <label v-if="label">{{label}}</label>
    <textarea v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="message" id="" cols="30" rows="10"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: ''
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