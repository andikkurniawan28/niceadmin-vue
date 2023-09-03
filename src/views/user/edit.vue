<script setup>

</script>

<template>
<main id="main" class="main">

    <div class="pagetitle">
        <h1>Edit User</h1>
        <nav>
            <ol class="breadcrumb">
                <router-link :to="{ name: 'home' }" class="breadcrumb-item">Dashboard</router-link>
                <router-link :to="{ name: 'user.index' }" class="breadcrumb-item">User</router-link>
                <li class="breadcrumb-item active">Edit User</li>
            </ol>
        </nav>
    </div>

</main>
</template>