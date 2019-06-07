<template>
    <div>
        <input 
            @input="$emit('input', $event.target.value)"
            :value="data"
            type="checkbox"
        >
    </div>
</template>

<script>
export default {
    props: {
        data: { type: String }
    }
}
</script>

<style scoped lang="scss">
$color-primary: #005caf;
$color-dark: #444444;
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
