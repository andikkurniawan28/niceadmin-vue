
<template>

<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link :to="{ name: 'user.index' }" class="nav-link">
                <i class="bi bi-person"></i>
                <span>User</span>
            </router-link>
        </li>

    </ul>

</aside>
    
<router-view></router-view>

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
</footer><!-- End Footer -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


</template>