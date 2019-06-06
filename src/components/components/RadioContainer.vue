<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-radio&gt;&lt;/ui-radio&gt;</h1>
        <!---------------------------------------->
        <ui-radio v-model="picked" content="Radio-1" checked>Label-1</ui-radio>
        <ui-radio v-model="picked" content="Radio-2">Label-2</ui-radio>
        <ui-radio v-model="picked" content="Radio-3">Label-3</ui-radio>

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
