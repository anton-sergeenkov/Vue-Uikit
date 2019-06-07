<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt; ui-input-radio&gt;&lt;/ ui-input-radio&gt;</h1>
        <!---------------------------------------->
        <ui-input-radio v-model="picked" content="Radio-1" checked>Label-1</ui-input-radio>
        <ui-input-radio v-model="picked" content="Radio-2">Label-2</ui-input-radio>
        <ui-input-radio v-model="picked" content="Radio-3">Label-3</ui-input-radio>

        <p>Выбрано: {{ picked }}</p>
    </div>

</template>

<script>
export default {
    data() {
        return {
            picked: ''
        }
    }
}
</script>

<style>
p {
    width: 100%;
}
.component-input-radio {
    margin: 20px 10px;
}
</style>
