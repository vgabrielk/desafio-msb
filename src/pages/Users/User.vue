<script>
import BackButton from '../../components/BackButton.vue';
import { getTasks } from '../../requests/tasks';
import api from '../../services/api';

export default {
    name: "User",
    data() {
        return {
            user: {},
            tasks: []
        };
    },
    methods: {
        async getUser(id) {
            try {
                const response = await api.get(`/users/${id}`);
                this.user = response.data;
                console.log(response.data);
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
        <BackButton route="/users"/>
        <div class="user-content">
            <h3>{{ user.name }}</h3>
            <span class="emoji">{{ user.active ? '🟢' : '🔴' }}</span>
        </div>
        <div class="user-content">
            <img :src="user.avatar" alt="">
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>