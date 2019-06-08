<template>
    <label class="component-ui-input-radio">
        <input 
            @input="$emit('input', $event.target.value)"
            :value="val"
            :name="'radio'+group" 
            type="radio"
        />
        <div class="icon"></div>
        {{label}}
    </label>
</template>

<script>
export default {
    props: ['val', 'label', 'group']
}
</script>

<style scoped lang="scss">
$color-primary: #005caf;
$color-dark: #727272;
$size: 20px;

.component-ui-input-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
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
</style>