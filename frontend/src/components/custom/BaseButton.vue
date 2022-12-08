<template lang="">
    <button class="submitBtn" type={{type}}>{{label}}</button>
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
<style lang="scss">
    .submitBtn {
        background-color: var(--polished-pine);
        color: var(--space-cadet);
        font-size: 1.1em;
        padding: 0.75rem;
        cursor: pointer;
        width: 30%;
        border: none;
    }
</style>