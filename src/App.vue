<template>
    <div class="wrapper">

        <app-menu class="wrapper-menu"></app-menu>

        <div class="wrapper-content">
            <ui-wrapper-button         id="ui-button" />
            <ui-wrapper-input-radio    id="ui-input-radio"/>
            <ui-wrapper-input-checkbox id="ui-input-checkbox" />
            <ui-wrapper-input-text     id="ui-input-text" />
            <ui-wrapper-toast          id="ui-toast" />
        </div>

    </div>
</template>

<script>
import Menu from './components/components/Menu.vue';

import WrapperButton        from './components/ui-wrapper/WrapperButton.vue';
import WrapperInputRadio    from './components/ui-wrapper/WrapperInputRadio.vue';
import WrapperInputCheckbox from './components/ui-wrapper/WrapperInputCheckbox.vue';
import WrapperInputText     from './components/ui-wrapper/WrapperInputText.vue';
import WrapperInputToast    from './components/ui-wrapper/WrapperInputToast.vue';

export default {
    components: {
        'app-menu': Menu,

        'ui-wrapper-button':         WrapperButton,
        'ui-wrapper-input-radio':    WrapperInputRadio,
        'ui-wrapper-input-checkbox': WrapperInputCheckbox,
        'ui-wrapper-input-text':     WrapperInputText,
        'ui-wrapper-toast':          WrapperInputToast
    }
}
</script>

<style lang="scss">
:root {
    --color-accent:  #2195f3;
    --color-light:   #b1b1b1;
    --color-lighter: #f7f7f7;
    --color-orange:  #e96900;
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
    margin: 0;
    background: var(--color-lighter);
    font-family: sans-serif;
}
h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 15px;
    background: var(--color-accent);
    color: #fff;
    font-size: 17px;
    font-family: monospace;
    font-weight: normal;
}
h2 {
    width: 100%;
    padding: 15px;
    background: #f8f8f8;
    color: #2973b7;
    font-family: monospace;
    font-size: 15px; 
    font-weight: normal;
    line-height: 1.7;
}
h3 {
    width: 100%;
    margin: 10px 0px;
    padding: 0;
    color: var(--color-light);
    font-size: 16px;
    font-weight: normal;
}
.wrapper {
    display: flex;
    .wrapper-menu {
        width: 230px;
        height: 100vh;
        flex-shrink: 0;
        overflow: auto;
        background: #fff;
        box-shadow: var(--box-shadow);
    }
    .wrapper-content {
        height: 100vh;
        flex-grow: 1;
        margin-left: 35px;
        overflow: auto;
    }
    .wrapper-components {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        max-width: 800px;
        margin: 20px auto;
        padding: 55px 20px 20px 20px;
        border-radius: .25rem;
        background: #fff;
        box-shadow: var(--box-shadow);
    }
}
</style>