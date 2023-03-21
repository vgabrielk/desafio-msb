<script>
import BackButton from '../../components/BackButton.vue'
import { getCompleteTasks, getIncompleteTasks, getTasks } from '../../requests/tasks'
export default {
    name: "Tasks",
    methods: {
        showDetails(id) {
            this.$router.push({ path: `/tasks/${id}` });
        },
        async requests() {
            switch (this.taskStatus) {
                case "ALL":
                    const all = await getTasks();
                    this.tasks = all;
                    break;
                case "ACTIVE":
                    const actives = await getCompleteTasks();
                    this.tasks = actives;
                    break;
                case "INACTIVE":
                    const inactives = await getIncompleteTasks();
                    this.tasks = inactives;
                    break;
            }
        }
    },
    data() {
        return {
            tasks: [],
            taskStatus: "ALL",
            isOpen: false
        };
    },
    mounted() {
        this.requests();
    },
    components: { BackButton }
}
</script>
<template>
    <div class="container">
        <BackButton route="/"/>
        <div class="header-table">
            <h3>Tasks</h3>
            <div class="reload">
                ↺
            </div>
        </div>
        <router-link to='/tasks/store'>
            <button>Cadastrar nova tarefa</button>
        </router-link>

        <div>
            <select class="custom-select my-3" name="status" v-model="taskStatus" :onchange="requests" id="status">
                <option value="ALL">TODAS</option>
                <option value="ACTIVE">ATIVAS</option>
                <option value="INACTIVE">INATIVAS</option>
            </select>
        </div>
        <div class='table-responsive'>
            <table class="table text-nowrap text-light">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Concluida</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tr" v-for="task in tasks" @click="showDetails(task.id)">
                    <td>{{ task.id }}</td>
                    <td class="name">{{ task.name }}</td>
                    <td>{{ task.descricao }}</td>
                    <td class="emoji">{{ task.done ? '🟢' : '🔴' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.reload {
    cursor: pointer;
    font-size: 2rem;
    background-color: #111;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    display: flex;
    height: 50px;
    width: 50px;

    border-radius: 50%;
}

.avatar {
    img {
        width: 80px;
        border-radius: 50%;
    }
}

.name {
    width: 80px;
    white-space: nowrap;
}

</style>