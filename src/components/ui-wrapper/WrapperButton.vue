<template>
    <div class="wrapper-components">
        <h1>&lt;ui-button&gt;&lt;/ui-button&gt;</h1>

        <h2>
            label="" <br>
            theme="normal | primary"
        </h2>
        <ui-button theme="normal" @click.native="handlerClick" label="normal" />
        <ui-button theme="primary" label="primary" />

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
