<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-input-text&gt;&lt;/ui-input-text&gt;</h1>
        <!---------------------------------------->

        <ui-input-text theme="normal" label="Имя" v-model="inputName"></ui-input-text>
        <ui-input-text theme="normal" label="E-mail" v-model="inputEmail"></ui-input-text>

        <h3>Result: {{inputName}} {{inputEmail}}</h3>

        <h2>
            theme="normal | primary" <br>
            label="Комментарий"
        </h2> 
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
