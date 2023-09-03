<script setup>
    import { ref, onMounted } from 'vue';
    import api from '../../api';

    const user = ref([]);

    const fetch = async () => {
        await api.get('/api/user')
        .then(response => {
            user.value = response.data;
        });
    }

    const destroy = async (id) => {
        await api.delete(`/api/user/${id}`)
        .then(() => {
            fetch();
        })
    };

    onMounted(() => {
        fetch();
    });
</script>

<template>
<main id="main" class="main">

    <div class="pagetitle">
        <h1>User</h1>
        <nav>
            <ol class="breadcrumb">
                <router-link :to="{ name: 'home' }" class="breadcrumb-item">Dashboard</router-link>
                <li class="breadcrumb-item active">User</li>
            </ol>
        </nav>
    </div>

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            User
                        </h3>
                        <router-link :to="{ name: 'user.create' }" class="btn btn-sm btn-outline-dark rounded-sm shadow border-1">Create</router-link>
                        <div class="table-responsive">
                            <br>
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col" class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in user.data" :key="index">
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.role_id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.username }}</td>
                                        <td class="text-center">
                                            <router-link :to="{ name: 'user.edit', params:{id: user.id} }" class="btn btn-sm btn-outline-primary rounded-sm shadow border-1 me-2">Edit</router-link>
                                            <button @click.prevent="destroy(user.id)" class="btn btn-sm btn-outline-danger rounded-sm shadow border-1">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
</template>