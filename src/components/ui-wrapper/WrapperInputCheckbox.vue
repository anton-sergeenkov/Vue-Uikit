<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-checkbox /&gt;</h1>

        <ui-input-checkbox v-model="picked" val="item1" label="Item 1" />
        <ui-input-checkbox v-model="picked" val="item2" label="Item 2" />
        <ui-input-checkbox v-model="picked" val="item3" label="Item 3" />

        <h3>Result: {{ picked }}</h3>

        <h2>
            val="" <br>
            label=""
        </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            picked: []
        }
    }
}
</script>

<style>
.component-ui-input-checkbox {
    margin: 20px 10px;
}
</style>
