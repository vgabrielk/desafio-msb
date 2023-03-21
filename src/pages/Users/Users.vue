<script>
import api from '../../services/api'
import { getActiveUsers, getInactiveUsers, getUsers } from '../../requests/users'
import BackButton from '../../components/BackButton.vue'
export default {
    name: "Users",
    methods: {
        showDetails(id) {
            this.$router.push({ path: `/users/${id}` });
        },
        async requests() {
            switch (this.userStatus) {
                case "ALL":
                    const all = await getUsers();
                    this.users = all;
                    break;
                case "ACTIVE":
                    const actives = await getActiveUsers();
                    this.users = actives;
                    break;
                case "INACTIVE":
                    const inactives = await getInactiveUsers();
                    this.users = inactives;
                    break;
            }
        }
    },
    data() {
        return {
            users: [],
            userStatus: "ALL",
            genericAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjblwVQ-GlXCaTJnkev2wwBkrWAZQzUehfQ&usqp=CAU"
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
        <BackButton route="/" />
        <div class="header-table">
            <h3>Users</h3>
            <div class="reload" @click="requests">
                ↺
            </div>
        </div>
        <router-link to='/users/store'>
            <button>Cadastrar novo usuário</button>
        </router-link>
        <div>
            <select class="custom-select my-3" name="status" v-model="userStatus" :onchange="requests" id="status">
                <option value="ALL">TODOS</option>
                <option value="ACTIVE">ATIVOS</option>
                <option value="INACTIVE">INATIVOS</option>
            </select>
        </div>
        <div class="table-responsive">

            <table class="table text-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Active</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tr" v-for="user in users" @click="showDetails(user.id)">
                        <td>{{ user.id }}</td>
                        <td class="name">{{ user.name }}</td>
                        <td class="emoji">{{ user.active ? '🟢' : '🔴' }}</td>
                        <td class="avatar">
                            <img :src="user.avatar || genericAvatar" />
                        </td>
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
    background-color: #171717;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    display: flex;
    height: 50px;
    width: 50px;

    box-shadow: 1px 1px solid #000000;

    border-radius: 50%;
}

.avatar {
    img {
        width: 50px;
        border-radius: 50%;
    }
}

.name {
    width: 80px;
    white-space: nowrap;
}
</style>