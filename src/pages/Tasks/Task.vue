<script>
import BackButton from '../../components/BackButton.vue'
import { getTasks } from '../../requests/tasks'
import api from '../../services/api'

export default {
    name: "Task",
    data() {
        return {
            task: {},
            name: "",
            descricao: "",
        };
    },
    components: { BackButton },
    methods: {
        async setStatus(task) {
            const data = {
                name: this.name || task.name,
                done: !task.done,
                descricao: this.descricao || task.descricao
            };
            try {
                const response = await api.put(`/tasks/${task.id}`, data);
                this.getTask(task.id);
            }
            catch (err) {
                alert(err);
            }
        },
        async deleteTask(task) {
            try {
                const response = await api.delete(`/tasks/${task.id}`);
                this.$router.push({ path: `/tasks` });
            }
            catch (err) {
                alert(err);
            }
        },
        async updateTask(task) {
            const data = {
                name: this.name || task.name,
                done: this.status,
                descricao: this.descricao || task.descricao
            };
            try {
                const response = await api.put(`/tasks/${task.id}`, data);
                this.getTask(task.id);
            }
            catch (err) {
                alert(err);
            }
        },
        async getTask(id) {
            try {
                const response = await api.get(`/tasks/${id}`);
                this.task = response.data;
            }
            catch (err) {
                alert(err);
            }
        },
    },
    mounted() {
        this.getTask(this.$router.currentRoute.value.params.id);
    },
}
</script>
<template>
    <div class="container">
        <BackButton route="/tasks"/>
        <div class="content">
            <label for="">Clique na bolinha para alterar o status da tarefa
   <span class="emoji" @click="setStatus(task)"> {{ task.done ? '🟢' : '🔴' }}</span>

            </label>
         
            <div class='row form-group'>
            <div class='col-sm-6'>
                <label>Nome</label>
                <input class='form-control' v-model="name" :placeholder="task.name"  type='text' />
            </div>
            <div class='col-sm-6'>
                <label>Descrição</label>
                <input class='form-control' type='text' 
                v-model="descricao" :placeholder="task.descricao" 
                />
            </div>
        </div>

            <div class="buttons">
                <button type="submit" @click="updateTask(task)">
                    Atualizar
                </button>
                <button @click="deleteTask(task)" class="secondary">
                    Deletar task
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

   

}

.emoji {
    margin-bottom: 20px;
}

@media(max-width: 830px) {
    .content {
        width: 100%;
    }
}
</style>