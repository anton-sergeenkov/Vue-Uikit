<template>
    <div id="app">

        <menu-container class="wrapper-menu" />

        <div class="wrapper-content">
            <radio-container id="ui-radio" />
            <input-container id="ui-input" />
            <button-container id="ui-button" />
            <toast-container id="ui-toast" />

        </div>

    </div>
</template>

<script>
import Menu from './components/pages/Menu.vue';

import ButtonContainer from './components/components/ButtonContainer.vue';
import InputContainer from './components/components/InputContainer.vue';
import ToastContainer from './components/components/ToastContainer.vue';
import RadioContainer from './components/components/RadioContainer.vue';

export default {
    components: {
        'button-container': ButtonContainer,
        'input-container': InputContainer,
        'toast-container': ToastContainer,
        'radio-container': RadioContainer,
        'menu-container': Menu
    }
}
</script>


<style lang="scss">
::-webkit-scrollbar       { width: 7px; height: 7px;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #b1b1b1; border-radius: 2px;}
::-webkit-scrollbar-track { background-color: #f7f7f7 }

* {
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    margin: 0;
    background: #f8f9fa;
}
#app {
    display: flex;
}

h1 {
    width: 100%;
    font-size: 19px;
    background: #2195f3;
    color: white;
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
pre {
    background: #f5f5f5;
    padding: 10px 40px 10px 0px;
    font-size: 15px;
}
.wrapper-components {
    max-width: 800px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    padding: 45px 20px;
    border-radius: .25rem;
    position: relative;
    background: #fff;
	box-shadow:
		0 16px 24px 2px rgba(33,37,41,.02), 
		0 6px 30px 5px rgba(33,37,41,.04), 
		0 8px 10px -5px rgba(33,37,41,.1);
}
.wrapper-content {
    margin-left: 20px;
    height: 100vh;
    flex-grow: 1;
    overflow: auto;
}
</style>