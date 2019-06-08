<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-radio /&gt;</h1>

        <ui-input-radio v-model="picked" val="item1" label="Item 1" group="1" color="blue-light" />
        <ui-input-radio v-model="picked" val="item2" label="Item 2" group="1" color="orange" />
        <ui-input-radio v-model="picked" val="item3" label="Item 3" group="1" />

        <h3>Result: {{ picked }}</h3>

        <h2>
            val="" <br>
            label="" <br>
            group="" <br>
            color="indigo | blue | blue-light | green | red | orange | silver"
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
