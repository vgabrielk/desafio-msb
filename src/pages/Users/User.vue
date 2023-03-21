<script>
import BackButton from '../../components/BackButton.vue';
import { getTasks } from '../../requests/tasks';
import api from '../../services/api';

export default {
    name: "User",
    data() {
        return {
            user: {},
            tasks: [],
            name: '',
            avatar: '',
        };
    },
    methods: {
        async getUser(id) {

            try {
                const response = await api.get(`/users/${id}`);
                this.user = response.data;
            }
            catch (err) {
                alert(err);
            }
        },

        async setStatus(user) {
            const data = {
                name: this.name || user.name,
                done: !user.done,
                avatar: this.avatar || user.avatar
            };
            try {
                const response = await api.put(`/users/${user.id}`, data);
                this.getUser(user.id);
                alert('Atualizado com sucesso!')

            }
            catch (err) {
                alert(err);
            }
        },

        async updateUser(id) {
            const data = {
                name: this.name,
                avatar: this.avatar,
            }
            try {
                const response = await api.put(`/users/${id}`, data)
                alert('Atualizado com sucesso!')
            }
            catch (err) {
                alert(err)
            }
        },
        async deleteUser(user) {
            try {
                const response = await api.delete(`/users/${user.id}`);
                this.$router.push({ path: `/users` });
                alert('Deletado com sucesso!')

            }
            catch (err) {
                alert(err);
            }
        },
        async getTasksOfUser(id) {
            try {
                const response = await getTasks();
            }
            catch (err) {
                alert(err);
            }
        }
    },
    mounted() {
        this.getUser(this.$router.currentRoute.value.params.id);
        this.getTasksOfUser(this.$router.currentRoute.value.params.id);
    },
    components: { BackButton }
}
</script>
<template>
    <main class="container">
        <BackButton route="/users" />
        <div class='row form-group'>
            <div class='col-sm-6'>
                <label for="">Clique na bolinha para alterar o status do usuário </label>

                    <span @click="setStatus(user)" class="emoji">{{ user.done ? '🟢' : '🔴' }}</span>
                    <h3 class="my-3">{{ user.name }}</h3>
                    <img :src="user.avatar" alt="">
            </div>
            <div class="col-sm-6">
                <label>Nome</label>
                <input :placeholder="user.name" v-model="name" class='form-control' type='text' />
                <label>Avatar (link)</label>
                <input :placeholder="user.avatar" v-model="avatar" class='form-control' type='text' />
                <div class="buttons">
                    <button class="mt-4" @click="updateUser(user.id)">Atualizar</button>
                    <button class="mt-4 secondary" @click="deleteUser(user)">
                        Deletar user
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>