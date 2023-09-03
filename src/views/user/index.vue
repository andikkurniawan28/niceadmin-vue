<script setup>

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
                        <h3 class="card-title">User</h3>
                        <router-link :to="{ name: 'user.create' }" class="btn btn-sm btn-outline-dark">Create</router-link>
                        <div class="table-responsive">
                            <br>
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Role ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>
</template>