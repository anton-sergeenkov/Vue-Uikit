<template>
    <label class="component-input-radio">

        <input 
            :value="content"
            :checked="checked"
            @input="$emit('input', $event.target.value)"
            type="radio"
            name="radio" 
        >

        <div class="label"></div>
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        content: { type: String },
        checked: { type: Boolean }
    }
}
</script>

<style lang="scss">
$c-primary: #005caf;
$c-dark: #444444;
$width: 20px;

.component-input-radio {
    display: flex;
    align-items: center;

    input[type="radio"] {
        display: none;
    }
    input[type="radio"]:checked + .label:after {
        content: '';
        display: block;
        background: $c-primary;
        width: $width / 2;
        height: $width / 2;
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

}

</style>