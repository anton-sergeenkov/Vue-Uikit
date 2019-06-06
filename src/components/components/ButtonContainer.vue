<template>
    
    <div class="wrapper-components">
        <!---------------------------------------->
        <h1>&lt;ui-button&gt;&lt;/ui-button&gt;</h1>
        <!---------------------------------------->

        <h2>theme="normal | primary"</h2>
        <ui-button theme="normal" @click.native="handlerClick">normal</ui-button>
        <ui-button theme="primary">primary</ui-button>

        <h2>size="xs | sm | md | lg"</h2>
        <ui-button size="xs">xs</ui-button>
        <ui-button size="sm">sm</ui-button>
        <ui-button size="md">md</ui-button>
        <ui-button size="lg">lg</ui-button>

        <h2>block</h2>
        <ui-button block>block</ui-button>
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
.ui-btn {
    margin: 10px;
}
</style>


