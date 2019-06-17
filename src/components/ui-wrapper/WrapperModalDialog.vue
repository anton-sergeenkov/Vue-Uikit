<template>
    <div class="wrapper-components">

        <h1>&lt;ui-modal-dialog&gt;&lt;/ui-modal-dialog&gt;</h1>

        <ui-button label="Открыть окно" @click.native="handleClick" />

        <ui-modal-dialog v-if="openModal" @close="closeModal">
            <template v-slot:header>Message</template>
            <template v-slot:form>
                <form @submit.prevent="checkForm" class="wrapper-form">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Expedita architecto impedit a quam ad recusandae repellendus 
                        voluptatem amet quo, dolore sunt id incidunt asperiores omnis 
                        alias doloribus inventore. Iusto, laborum
                    </p>
                    <ui-button label="Согласен" color="blue-light" />
                    <ui-button label="Отмена" color="blue-light" @click.native.prevent="closeModal" />
                </form>
            </template>
        </ui-modal-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            openModal: false,
            wasOpened: false
        }
    },
    methods: {
        closeModal() {
            this.openModal = false;
        },
        checkForm() {
			alert('ok');
        },
        handleClick() {
            this.openModal = true;
        }
    }
}
</script>

<style>
.component-ui-button {
    margin: 20px 10px;
}
.wrapper-form {
    width: 400px;
    line-height: 1.5;
    padding: 20px;
}
.wrapper-form p {
    margin-bottom: 50px;
}
</style>
