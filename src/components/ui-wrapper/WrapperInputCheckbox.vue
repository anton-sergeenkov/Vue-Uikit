<template>
    <div class="wrapper-components">
        <h1>&lt;ui-input-checkbox /&gt;</h1>

        <ui-input-checkbox v-model="checkedNames" data="Sawyer" />
        <ui-input-checkbox v-model="checkedNames" data="Kate" />

        <input type="checkbox" value="Джек" v-model="checkedNames">
        <input type="checkbox" value="Джон" v-model="checkedNames">

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
