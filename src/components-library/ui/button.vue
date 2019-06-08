<template>
    <button :class="classes" class="component-ui-button">
        {{label}}
    </button>
</template>

<script>
export default {
    props: {
        theme: { type: String, default: 'normal' },
        size:  { type: String, default: 'sm' },
        label: { type: String },
        block: { type: Boolean }
    },
    computed: {
        classes() {
            let name = 'component-ui-button--';
            return {
                [name+this.size]: true, 
                [name+this.theme]: true,
                [name+'block']: this.block
            };
        }
    }
}
</script>

<style scoped lang="scss">
@import './styles.scss';

$color-normal: #f5f5f5;
$color-primary: #2195f3;
$box-shadow: 
    0px 3px 1px -2px rgba(0,0,0,0.2), 
    0px 2px 2px 0px rgba(0,0,0,0.14), 
    0px 1px 5px 0px rgba(0,0,0,0.12);

.component-ui-button {
    display: block;
    padding: 13px 20px;
    border: none;
    outline: none;
    background: none;
    color: #000;
    border-radius: 3px;
    font-family: inherit;
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: $box-shadow;
    cursor: pointer;
    transition: 0.4s;
}

.component-ui-button-- {
    &xs    { font-size: 10px; }
    &sm    { font-size: 14px; }
    &md    { font-size: 17px; }
    &lg    { font-size: 20px; }
    &block { width: 100%; }
}

.component-ui-button-- {
    &normal { background-color: $color-normal; }
    &primary { background-color: $color-primary; color: #fff; }
}
</style>