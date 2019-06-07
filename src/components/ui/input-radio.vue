<template>
    <label class="component-ui-input-radio">

        <input 
            :value="data"
            :checked="checked"
            @input="$emit('input', $event.target.value)"
            type="radio"
            :name="'radio'+group" 
        >

        <div class="icon"></div>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        data:    { type: String },
        group:   { type: String },
        checked: { type: Boolean }
    }
}
</script>

<style lang="scss">
$color-primary: #005caf;
$color-dark: #444444;
$size: 20px;

.component-ui-input-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    input[type="radio"] {
        display: none;
        &:checked + .icon:after {
            content: '';
            display: block;
            width: $size / 2;
            height: $size / 2;
            background: $color-primary;
            border-radius: 50%;
        }
        &:checked + .icon {
            border: 2px solid $color-primary;
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
        border-radius: 50%;
    }
}
</style>