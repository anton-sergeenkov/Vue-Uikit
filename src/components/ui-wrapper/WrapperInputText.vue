<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-input-text&gt;&lt;/ui-input-text&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary" <span>{{inputName}}</span></h2> 
        <ui-input-text theme="normal" label="Имя" v-model="inputName"></ui-input-text>

        <h2>label="Комментарий" <span>{{inputEmail}}</span></h2>
        <ui-input-text theme="normal" label="E-mail" v-model="inputEmail"></ui-input-text>

    </div>

</template>

<script>
export default {
    data() {
        return {
            inputName: '',
            inputEmail: ''
        }
    }
}
</script>

<style>
.input-wrapper {
    margin: 20px 0px;
}
h2 span {
    color: grey;
    font-weight: normal;
}
</style>
