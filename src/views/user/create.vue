<script setup>

</script>

<template>
<main id="main" class="main">

    <div class="pagetitle">
        <h1>Create User</h1>
        <nav>
            <ol class="breadcrumb">
                <router-link :to="{ name: 'home' }" class="breadcrumb-item">Dashboard</router-link>
                <router-link :to="{ name: 'user.index' }" class="breadcrumb-item">User</router-link>
                <li class="breadcrumb-item active">Create User</li>
            </ol>
        </nav>
    </div>

    <section class="section dashboard">
        <h1>HelloWorld</h1>
    </section>

</main>
</template>