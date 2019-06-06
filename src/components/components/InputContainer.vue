<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-input&gt;&lt;/ui-input&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary" <span>{{inputName}}</span></h2> 
        <ui-input theme="normal" label="Имя" v-model="inputName"></ui-input>

        <h2>label="Комментарий" <span>{{inputEmail}}</span></h2>
        <ui-input theme="normal" label="E-mail" v-model="inputEmail"></ui-input>

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
