<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-radio&gt;&lt;/ui-input-radio&gt;</h1>

        <ui-input-radio v-model="picked" data="Radio-1" group="1" checked>Label-1</ui-input-radio>
        <ui-input-radio v-model="picked" data="Radio-2" group="1">Label-2</ui-input-radio>
        <ui-input-radio v-model="picked" data="Radio-3" group="1">Label-3</ui-input-radio>

        <h3>Result: {{ picked }}</h3>

        <h2>
            data="" <br>
            group="" <br>
            checked
        </h2>
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
.component-ui-input-radio {
    margin: 20px 10px;
}
</style>
