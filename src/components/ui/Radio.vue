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
.wrapper-radio {
    display: flex;
}
input[type="radio"] {
    display: none;
}
input[type="radio"]:checked + label:after {
    content: '';
    display: block;
    background: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
label {
    width: 50px;
    height: 50px;
    background: yellowgreen;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
}
</style>