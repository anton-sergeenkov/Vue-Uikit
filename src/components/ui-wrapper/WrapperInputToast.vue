<template>
    
    <div class="wrapper-components">
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
.ui-toast   {
    margin: 10px;
}
.ui-toast {
    position: relative !important;
    top: 0;
    left: 0;
}
</style>


