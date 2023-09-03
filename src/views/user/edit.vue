<script setup>
    import { ref, onMounted } from "vue";
    import { useRouter, useRoute } from 'vue-router';
    import api from "../../api";

    const router = useRouter();

    const route = useRoute();
    
    const role      = ref("");
    const name      = ref("");
    const role_id   = ref("");
    const username  = ref("");
    const errors    = ref([]);

    const callRole = async () => {
        await api.get('/api/role')
        .then(response => {
            role.value = response.data;
        });
    }

    const callUser = async () => {
        await api.get(`/api/user/${route.params.id}`)
        .then(response => {
            name.value = response.data.user.name
            role_id.value = response.data.user.role_id
            username.value = response.data.user.username
        });
    }

    onMounted( async () => {
        callRole();
        callUser();
    })

    const update = async () => {
        let formData = new FormData();
        formData.append("name", name.value);
        formData.append("role_id", role_id.value);
        formData.append("username", username.value);
        formData.append("_method", "PATCH");
        await api.post(`/api/user/${route.params.id}`, formData)
        .then(() => {
            router.push({ name: "user.index" });
        })
        .catch((error) => {
            errors.value = error.response.data;
        });
    };
</script>

<template>
<main id="main" class="main">

    <div class="pagetitle">
        <h1>User</h1>
        <nav>
            <ol class="breadcrumb">
                <router-link :to="{ name: 'home' }" class="breadcrumb-item">Dashboard</router-link>
                <router-link :to="{ name: 'user.index' }" class="breadcrumb-item">User</router-link>
                <li class="breadcrumb-item active">Edit User</li>
            </ol>
        </nav>
    </div>

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            Edit User
                        </h3>
                        <form @submit.prevent="update()">
                            <div class="row mb-3">
                                <label for="name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="name" v-model="name" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="role_id" class="col-sm-2 col-form-label">Role</label>
                                <div class="col-sm-10">
                                    <select v-model="role_id" class="form-control">
                                        <option v-for="role in role.role" :value="role.id">{{ role.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="username" class="col-sm-2 col-form-label">Username</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="username" v-model="username" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="create" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-sm btn-outline-primary rounded-sm shadow border-1">Edit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
</template>