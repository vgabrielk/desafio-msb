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
                console.log(response.data);
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
            <label for="">Clique na bolinha para alterar o status da tarefa</label>
            <span class="emoji" @click="setStatus(task)"> {{ task.done ? '🟢' : '🔴' }}</span>
            <label>Nome</label>
            <input type="text" :placeholder="task.name" v-model="name" />
            <label>Descrição</label>
            <input type="text" :placeholder="task.descricao" v-model="descricao" />
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
    width: 50%;
    gap: 20px;

    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    input {
        background-color: #111;
        color: #fff;
        border: none;
        height: 30px;
        user-select: none;
        padding: 0 10px;
        margin-bottom: 20px;
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