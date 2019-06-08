<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-checkbox /&gt;</h1>

        <ui-input-checkbox v-model="checkedNames" data="item1" label="Item 1" />
        <ui-input-checkbox v-model="checkedNames" data="item2" label="Item 2" />
        <ui-input-checkbox v-model="checkedNames" data="item3" label="Item 3" />

        <h3>Result: {{ checkedNames }}</h3>

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
            checkedNames: []
        }
    }
}
</script>

<style>

</style>
