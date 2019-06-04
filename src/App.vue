<template>
    <div id="app">
    
    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-button&gt;&lt;/ui-button&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-button theme="normal">normal</ui-button>
        <ui-button theme="primary">primary</ui-button>

        <h2>size="xs | sm | md | lg"</h2>
        <ui-button size="xs">xs</ui-button>
        <ui-button size="sm">sm</ui-button>
        <ui-button size="md">md</ui-button>
        <ui-button size="lg">lg</ui-button>

        <h2>block</h2>
        <ui-button block>block</ui-button>
    </div>

    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-input theme="normal"></ui-input>
        <ui-input theme="primary"></ui-input>
    </div>

    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-toast&gt;&lt;/ui-toast&gt;</h1>
        <!---------------------------------------->

        <h2>theme="primary | success | info | warning | error"</h2>
        <ui-toast theme="primary">primary</ui-toast>
        <ui-toast theme="success">success</ui-toast>
        <ui-toast theme="info">info</ui-toast>
        <ui-toast theme="warning">warning</ui-toast>
        <ui-toast theme="error">error</ui-toast>
    </div>


    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    margin: 0;
	background: #f8f9fa;
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
.wrapper {
    max-width: 900px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    padding: 45px 20px;
    border-radius: .25rem;
    position: relative;
	box-shadow:
		0 16px 24px 2px rgba(33,37,41,.02), 
		0 6px 30px 5px rgba(33,37,41,.04), 
		0 8px 10px -5px rgba(33,37,41,.1);
}


.ui-btn, .ui-input, .ui-toast   {
    margin: 10px;
}
.ui-toast {
    position: relative !important;
    top: 0;
    left: 0;
}
</style>