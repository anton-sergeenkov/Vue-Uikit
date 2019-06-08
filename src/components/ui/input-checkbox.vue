<template>
    <label class="component-ui-input-checkbox">
        <input 
            v-model="checked" 
            @change="onChange"
            :value="val" 
            type="checkbox" 
        />
        <div class="icon"></div>
        {{label}}    
    </label>
</template>

<script>
export default {
    props: ['value', 'val', 'label'],
    data () {
        return {
            checkedProxy: false
        }
    },
    computed: {
        checked: {
            get() {
                return this.value;
            },
            set(val) {
                this.checkedProxy = val;
            }
        }
    },
    methods: {
        onChange: function(e) {
            this.$emit('input', this.checkedProxy);
        }
    }
}
</script>

<style scoped lang="scss">
$color-primary: #005caf;
$color-dark: #727272;
$size: 20px;

.component-ui-input-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
input[type="checkbox"] {
    display: none;
    &:checked + .icon:after {
        content: '✔';
        display: flex;
        justify-content: center;
        align-items: center;
        width: $size / 2;
        height: $size / 2;
        color: #fff;
        font-size: 13px;
    }
    &:checked + .icon {
        border: 2px solid $color-primary;
        background: $color-primary;
    }
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $size;
    height: $size;
    margin: 10px;
    border: 2px solid $color-dark;
    border-radius: 3px;
}
</style>
