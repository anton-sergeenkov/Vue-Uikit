<template>
    <label class="wrapper-radio">
        <input type="radio" name="radio" :id="id">
        <label :for="id" class="label"></label>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        id: { type: String }
    },
}
</script>

<style scoped lang="scss">
$c-primary: #005caf;
$c-dark: #444444;
$width: 25px;

.wrapper-radio {
    display: flex;
    align-items: center;
}
input[type="radio"] {
    display: none;
}
input[type="radio"]:checked + .label:after {
    content: '';
    display: block;
    background: $c-primary;
    width: $width / 1.75;
    height: $width / 1.75;
    border-radius: 50%;
}
input[type="radio"]:checked + .label {
    border: 2px solid $c-primary;
}
.label {
    width: $width;
    height: $width;
    border: 2px solid $c-dark;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
}
label {
    cursor: pointer;
}
</style>