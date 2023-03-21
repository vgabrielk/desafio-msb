<script>
export default {
    name: 'Home',
    methods: {
        redirectTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="links">
            <div class="link">
                <h2>Usuários</h2>
                <p>Lista todos os usuários existentes na api, podendo filtrar por ativos e inativos, também podendo gerenciar novos usuários.</p>
                <button @click="redirectTo('/users')">
                    Ver usuários
                </button>
            </div>
            <div class="link">
                <h2>Tarefas</h2>
                <p>Lista todas as tarefas existentes na api de tasks, podendo marca-las como concluida.</p>
                <button @click="redirectTo('/tasks')">    
                Ver tarefas
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.links {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .link {
        background-color: #111;
        height: auto;
        width: 100%;
        border-radius: 6px;
        padding: 2rem;
        padding-bottom: 8rem;
        box-sizing: border-box;
        position: relative;
        box-shadow: 1px 1px 12px black;

        h2 {
            letter-spacing: 8px;
            color: #fff;
        }
        p{
            color: #fff;
            margin-top: 10px;
        }

        
    }
}
</style>