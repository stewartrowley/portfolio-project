<template lang="">
    <div id="base-text">
        <label v-if="label">{{label}}</label>
        <input type={{type}} v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
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
        },
        modelValue: {
            type: String,
            default: ''
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