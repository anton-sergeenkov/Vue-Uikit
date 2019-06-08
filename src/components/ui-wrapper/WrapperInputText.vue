<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-text /&gt;</h1>

        <ui-input-text v-model="inputName" color="blue-light" label="Имя" />
        <ui-input-text v-model="inputEmail" color="orange" label="E-mail" />

        <h3>Result: {{inputName}} {{inputEmail}}</h3>

        <h2>
            label="Комментарий" <br>
            color="indigo | blue | blue-light | green | red | orange | silver"
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