<script>

import BackButton from '../../components/BackButton.vue'
import api from '../../services/api'
export default {
    name: "UserStore",
    methods: {
        async createNewUser() {
            const data = {
                name: this.form.nome,
                avatar: this.form.avatar
            };
            try {
                const response = await api.post("/users", data);
                this.$router.push("/users");
                alert('Cadastrado com sucesso!')

            }
            catch (err) {
                alert(err);
            }
        }
    },
    data() {
        return {
            form: {
                nome: "",
                avatar: "",
            }
        };
    },
    components: { BackButton }
}

</script>


<template>
	<div class="container">
        <BackButton route="/users" />
		<div class='row form-group col-sm-12'>
			<div class='col-md-12'>
				<label>Nome</label>
				<input class='form-control' v-model="form.nome" type='text' placeholder='Digite o nome' />
			</div>
			<div class='col-md-12'>
				<label>Avatar</label>
				<input v-model="form.avatar" class="form-control" placeholder="Link do avatar" />
				<button @click="createNewUser" class='mt-4'>Cadastrar</button>
			</div>
		</div>
	</div>
</template>