<template>
    <div class="wrapper-radio">

        <div class="radio">
            <input type="radio" name="radio" id="radio1">
            <label for="radio1"></label>
        </div>

        <div class="radio">
            <input type="radio" name="radio" id="radio2">
            <label for="radio2"></label>
        </div>

        <div class="radio">
            <input type="radio" name="radio" id="radio3">
            <label for="radio3"></label>
        </div>

    </div>
</template>

<script>
export default {
    // props: {
    //     theme: { type: String, default: 'normal' },
    //     size:  { type: String, default: 'sm' },
    //     block: { type: Boolean }
    // },
}
</script>

<style scoped lang="scss">
$c-primary: #005caf;
$c-dark: #444444;
$width: 25px;

.wrapper-radio {
    display: flex;
}
input[type="radio"] {
    display: none;
}
input[type="radio"]:checked + label:after {
    content: '';
    display: block;
    background: $c-primary;
    width: $width / 1.75;
    height: $width / 1.75;
    border-radius: 50%;
}
input[type="radio"]:checked + label {
    border: 2px solid $c-primary;
}
label {
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
</style>