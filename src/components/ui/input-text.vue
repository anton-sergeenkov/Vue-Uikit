<template>
    <div class="component-ui-input-text">
        <input 
            @input="$emit('input', $event.target.value)" 
            @focus="onFocus" 
            @blur="onBlur($event.target.value)" 
            :class="classes" 
            class="input"
            type="text"
        >
        <label :class="{ active:focused }" v-html="label"></label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            focused: false
        }
    },
    props: {
        theme: { type: String, default: 'normal' },
        label: { type: String }
    },
    methods: {
        onFocus() {
            this.focused = true;
        },
        onBlur(content) {
            if (content === '') {
                this.focused = false;
            }
        }
    },
    computed: {
        classes() {
            return {
                ['input--'+this.theme]: true,
                ['active']: this.focused
            };
        }
    }
}
</script>

<style scoped lang="scss">
$color-light: #747474;
$color-accent: #1867c0;
$font-size: 15px;
$padding: 10px 10px 10px 5px;

.component-ui-input-text {
    position: relative;
    width: 100%;
}
.input {
    position: relative;
    z-index: 1;
    width: 100%; 
    padding: $padding;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: $font-size;
    background: none;
    &.active {
        border-bottom: 1px solid $color-accent;
    }
}
label {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    padding: $padding;
    font-size: $font-size;
    color: $color-light;
    transition: 0.4s;
    &.active {
        top: -25px;
        font-size: 14px;
        color: $color-accent;
    }
}

.input--normal {
    border-bottom: 1px solid $color-light;
}
</style>
