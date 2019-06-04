<template>
    <input :class="classes" :value="value" @input="$emit('input', $event.target.value)" class="ui-input">
</template>

<script>
export default {
    props: {
        theme: { type: String, default: 'normal' },
        block: { type: Boolean },
        value: { type: String }
    },
    computed: {
        classes() {
            return {
                ['ui-input--'+this.theme]: true
            };
        }
    }
}
</script>

<style scoped>
.ui-input {
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --font-input:        15px;
    --color-light:       #eee;
}
.ui-input{
    width: 100%; 
    padding: 15px;
    border: none;
    border-radius: 2px;
    font-family: inherit;
    font-size: var(--font-input);
    outline: none;
}

/*----------------------------------------
NORMAL 
----------------------------------------*/
.ui-input--normal {
    border: 1px solid #000;
}

/*----------------------------------------
PRIMARY 
----------------------------------------*/
.ui-input--primary {
    background: var(--color-light);
    border-bottom: 2px solid transparent;
}
.ui-input--primary:focus {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
</style>
