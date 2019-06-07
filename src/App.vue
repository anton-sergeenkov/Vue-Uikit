<template>
    <div class="wrapper">

        <app-menu class="wrapper-menu"></app-menu>

        <div class="wrapper-content">
            <ui-wrapper-input-radio id="ui-input-radio"/>
            <ui-wrapper-input-text  id="ui-input-text" />
            <ui-wrapper-button      id="ui-button" />
            <ui-wrapper-toast       id="ui-toast" />
        </div>

    </div>
</template>

<script>
import Menu from './components/components/Menu.vue';

import WrapperButton     from './components/ui-wrapper/WrapperButton.vue';
import WrapperInputRadio from './components/ui-wrapper/WrapperInputRadio.vue';
import WrapperInputText  from './components/ui-wrapper/WrapperInputText.vue';
import WrapperInputToast from './components/ui-wrapper/WrapperInputToast.vue';

export default {
    components: {
        'app-menu': Menu,

        'ui-wrapper-button':      WrapperButton,
        'ui-wrapper-input-radio': WrapperInputRadio,
        'ui-wrapper-input-text':  WrapperInputText,
        'ui-wrapper-toast':       WrapperInputToast
    }
}
</script>

<style lang="scss">
:root {
    --color-accent:  #2195f3;
    --color-light:   #b1b1b1;
    --color-lighter: #f7f7f7;
    --box-shadow: 
        0 16px 24px 2px rgba(33,37,41,.02), 
        0 6px 30px 5px rgba(33,37,41,.04), 
        0 8px 10px -5px rgba(33,37,41,.1);
}

::-webkit-scrollbar       { width: 7px; height: 7px;}
::-webkit-scrollbar-thumb { height: 50px; background-color: var(--color-light); border-radius: 2px;}
::-webkit-scrollbar-track { background-color: var(--color-lighter) }
 
* {
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    margin: 0;
    background: var(--color-lighter);
}
h1 {
    width: 100%;
    font-size: 19px;
    background: var(--color-accent);
    color: var(--color-lighter);
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 10px;
}
h2 {
    width: 100%;
    font-size: 17px;
}
.wrapper {
    display: flex;
    .wrapper-menu {
        width: 200px;
        height: 100vh;
        flex-shrink: 0;
        overflow: auto;
        background: #fff;
        box-shadow: var(--box-shadow);
    }
    .wrapper-content {
        height: 100vh;
        flex-grow: 1;
        margin-left: 20px;
        overflow: auto;
    }
    .wrapper-components {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        max-width: 800px;
        margin: 20px auto;
        padding: 45px 20px;
        border-radius: .25rem;
        background: #fff;
        box-shadow: var(--box-shadow);
    }
}
</style>