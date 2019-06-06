<template>
    
    <div class="wrapper">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-input type="text" theme="normal" v-model="inputText" placeholder="Typed..."></ui-input>
        <ui-input theme="primary" placeholder="Typed..."></ui-input>
    </div>

</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        }
    }
}
</script>

<style>

.input-wrapper {
    margin: 30px 0px;
}
</style>
