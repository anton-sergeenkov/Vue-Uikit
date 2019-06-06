<template>
    <div>
        <ul>
            <li><a href="#ui-radio">🐼 ui-input-radio</a></li>
            <li><a href="#ui-input">🐻 ui-input-text</a></li>
            <li><a href="#ui-button">🐱 ui-button</a></li>
            <li><a href="#ui-toast">🦊 ui-toast</a></li>
        </ul>
    </div>
</template>

<style scoped>
.wrapper-menu {
    background: white;
    width: 200px;
	box-shadow:
		0 16px 24px 2px rgba(33,37,41,.02), 
		0 6px 30px 5px rgba(33,37,41,.04), 
        0 8px 10px -5px rgba(33,37,41,.1);
    height: 100vh;
    overflow: auto;
    flex-shrink: 0;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding-top: 20px;
}
a {
    display: block;
    padding: 7px;
    text-decoration: none;
    color: #2195f3;
    font-weight: bold;
    border-bottom: 1px solid grey;
    user-select: none;
    margin: 7px 20px;
}
</style>
