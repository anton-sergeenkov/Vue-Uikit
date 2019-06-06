<template>
    <div class="input-wrapper">
        <input 
            :class="classes" 
            @focus="onFocus" 
            @blur="onBlur($event.target.value)" 
            @input="$emit('input', $event.target.value)" 
            class="ui-input"
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
        block: { type: Boolean },
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
                ['ui-input--'+this.theme]: true,
                ['active']: this.focused
            };
        }
    }
}
</script>

<style scoped scoped lang="scss">
$color-light: #747474;
$font-size: 15px;
$color-accent: #1867c0;
$padding: 10px 10px 10px 5px;

.ui-input {
    width: 100%; 
    padding: $padding;
    border: none;
    border-radius: 2px;
    font-family: inherit;
    font-size: $font-size;
    outline: none;
    z-index: 1;
    position: relative;
    background: none;
}
.ui-input.active {
    border-bottom: 1px solid $color-accent;
}
.input-wrapper {
    width: 100%;
    position: relative;
}
label {
    position: absolute;
    top: 0;
    left: 0;
    padding: $padding;
    transition: 0.4s;
    z-index: 0;
    font-size: $font-size;
    color: $color-light;
}
label.active {
    top: -25px;
    font-size: 14px;
    color: $color-accent;
}




/*----------------------------------------
NORMAL 
----------------------------------------*/
.ui-input--normal {
    border-bottom: 1px solid $color-light;
}
</style>
