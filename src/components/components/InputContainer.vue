<template>
    
    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-input theme="normal"></ui-input>
        <ui-input theme="primary"></ui-input>
    </div>

</template>

<script>
export default {
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
