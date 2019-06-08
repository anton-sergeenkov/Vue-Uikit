<template>
    <div class="wrapper-components">
        <h1>&lt;ui-button /&gt;</h1>

        <h2>
            label="" <br>
            color="indigo | blue | blue-light | green | red | orange | silver"
        </h2>
        <ui-button @click.native="handlerClick" label="silver" />
        <ui-button color="indigo" label="indigo" />
        <ui-button color="blue" label="blue" />
        <ui-button color="blue-light" label="blue-light" />
        <ui-button color="green" label="green" />
        <ui-button color="red" label="red" />
        <ui-button color="orange" label="orange" />

        <h2>size="xs | sm | md | lg"</h2>
        <ui-button size="xs" label="xs" />
        <ui-button size="sm" label="sm" />
        <ui-button size="md" label="md" />
        <ui-button size="lg" label="lg" />

        <h2>block</h2>
        <ui-button block label="block" />
    </div>
</template>

<script>
export default {
    methods: {
        handlerClick() {
            alert('ok');
        }
    }
}
</script>

<style>
.component-ui-button {
    margin: 10px;
}
</style>
