<template>
    
    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        {{inputText}}
        <ui-input theme="normal" v-model="inputText" placeholder="Typed..." autofocus></ui-input>
        <ui-input theme="primary" placeholder="Typed..."></ui-input>
    </div>

</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        handlerClick() {
            alert('ok');
        }
    }
}
</script>

<style>

.ui-input {
    margin: 10px;
}
</style>
