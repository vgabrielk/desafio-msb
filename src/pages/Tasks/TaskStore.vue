<script>

import BackButton from '../../components/BackButton.vue'
import api from '../../services/api'
export default {
    name: "TaskStore",
    methods: {
        async createNewTask() {
            const data = {
                name: this.form.nome,
                descricao: this.form.descricao
            };
            try {
                const response = await api.post("/tasks", data);
                this.$router.push("/tasks");
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
                descricao: "",
            }
        };
    },
    components: { BackButton }
}

</script>


<template>
	<div class="container">
		<BackButton route="/tasks" />
		<div class='row form-group col-sm-12'>
			<div class='col-md-12'>
				<label>Nome</label>
				<input class='form-control' v-model="form.nome" type='text' placeholder='Digite o nome' />
			</div>
			<div class='col-md-12'>
				<label>Descrição</label>
				<input v-model="form.descricao" class="form-control" placeholder="Digite a descrição" />
				<button @click="createNewTask" class='mt-4'>Cadastrar</button>
			</div>
		</div>
	</div>
</template>