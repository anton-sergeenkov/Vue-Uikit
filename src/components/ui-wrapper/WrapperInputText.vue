<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-text /&gt;</h1>

        <ui-input-text v-model="inputName" theme="normal" label="Имя" />
        <ui-input-text v-model="inputEmail" theme="normal" label="E-mail" />

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
.component-ui-input-text {
    margin: 20px 0px;
}
</style>