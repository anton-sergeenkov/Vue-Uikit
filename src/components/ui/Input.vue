<template>
    <div class="input-wrapper">
        <input :class="classes" :value="value" @focus="onFocus" @blur="onBlur($event.target.value)" @input="$emit('input', $event.target.value)" class="ui-input">
        <label :class="{ active:focused }">Name</label>
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
        value: { type: String }
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
                ['ui-input--'+this.theme]: true
            };
        }
    }
}
</script>

<style scoped scoped lang="scss">
$color-light: #747474;
$font-size: 15px;
$color-accent: #1867c0;

.ui-input {
    width: 100%; 
    padding: 10px;
    border: none;
    border-radius: 2px;
    font-family: inherit;
    font-size: $font-size;
    outline: none;
    z-index: 1;
    position: relative;
    background: none;
}
.input-wrapper {
    width: 100%;
    position: relative;
}
label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    transition: 0.4s;
    z-index: 0;
    font-size: $font-size;
}
label.active {
    top: -30px;
    font-size: 13px;
    color: $color-accent;
}
// .ui-input:focus {
//     border-bottom: 1px solid #1867c0;
// }



/*----------------------------------------
NORMAL 
----------------------------------------*/
.ui-input--normal {
    border-bottom: 1px solid $color-light;
}

/*----------------------------------------
PRIMARY 
----------------------------------------*/
.ui-input--primary {
    border-bottom: 1px solid yellowgreen;
}
.ui-input--primary:focus {
    border-bottom: 1px solid black;
}
</style>
