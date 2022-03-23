<!-- bundle JS -->
<script src="{{ asset('assets/js/bundle.min.js') }}"></script>
@yield('beforeJs')
<!-- Custom JS -->
<script src="{{ asset('assets/js/app.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
@yield('afterJs')