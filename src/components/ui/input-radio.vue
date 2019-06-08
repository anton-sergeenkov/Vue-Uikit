<template>
    <label class="component-ui-input-radio">
        <input 
            @input="$emit('input', $event.target.value)"
            :value="val"
            :name="'radio'+group" 
            type="radio"
        />
        <div :class="classes" class="icon"></div>
        {{label}}
    </label>
</template>

<script>
export default {
    props: {
        color: { type: String, default: 'silver' },
        val:   { type: String },
        label: { type: String },
        group: { type: String }
    },
    computed: {
        classes() {
            return {
                [this.color]: true
            };
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$color-primary: #005caf;
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


// input[type="radio"] {
//     &:checked + .icon:after {
//         background: $color-primary;
//     }
//     &:checked + .icon {
//         border: 2px solid $color-primary;
//     }
// }



.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $size;
    height: $size;
    margin: 10px;
    border: 2px solid $gray;
    border-radius: 50%;
}
</style>