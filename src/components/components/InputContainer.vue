<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-input theme="normal" label="Имя" type="text" v-model="inputName"></ui-input>

        <h2>label="Комментарий"</h2>
        <ui-input theme="normal" label="E-mail" type="text" v-model="inputEmail"></ui-input>

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
</style>
