<template>
    <div id="app">

        <menu-container class="wrapper-menu" />

        <div class="wrapper-content">
            <button-container id="ui-button" />
            <input-container id="ui-input" />
            <toast-container id="ui-toast" />
        </div>

    </div>
</template>

<script>
import Menu from './components/pages/Menu.vue';

import ButtonContainer from './components/components/ButtonContainer.vue';
import InputContainer from './components/components/InputContainer.vue';
import ToastContainer from './components/components/ToastContainer.vue';

export default {
    components: {
        'button-container': ButtonContainer,
        'input-container': InputContainer,
        'toast-container': ToastContainer,
        'menu-container': Menu
    }
}
</script>


<style lang="scss">
::-webkit-scrollbar       { width: 7px; height: 7px;}
::-webkit-scrollbar-thumb { height: 50px; background-color: rgba(170, 66, 244, 0.7); border-radius: 2px;}
::-webkit-scrollbar-track { background-color: rgba(170, 66, 244, 0.2) }

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
    background: rgba(75,191,185, 1);
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

.wrapper-menu {
    background: white;
    width: 200px;
	box-shadow:
		0 16px 24px 2px rgba(33,37,41,.02), 
		0 6px 30px 5px rgba(33,37,41,.04), 
        0 8px 10px -5px rgba(33,37,41,.1);
    height: 100vh;
    overflow: auto;
    background: white;
    flex-shrink: 0;
}
.wrapper-content {
    margin-left: 20px;
    height: 100vh;
    flex-grow: 1;
    overflow: auto;
}
</style>