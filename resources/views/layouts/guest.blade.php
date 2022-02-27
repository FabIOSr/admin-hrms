
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <meta name="description" content="Smarthr - Bootstrap Admin Template">
		<meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects">
        <meta name="author" content="Dreamguys - Bootstrap Admin Template">
        <meta name="robots" content="noindex, nofollow">
        <title>Login - HRMS admin template</title>
		
		<!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
		
		<!-- Bootstrap CSS -->
        <link rel="stylesheet" href="{{ asset('assets/css/bundle.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/toastr.css') }}">
		
		<!-- Main CSS -->
        <link rel="stylesheet" href="assets/css/style.css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
		
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
			<script src="assets/js/html5shiv.min.js"></script>
			<script src="assets/js/respond.min.js"></script>
		<![endif]-->
    </head>
    <body class="account-page">
	
		<!-- Main Wrapper -->
        <div class="main-wrapper">
			<div class="account-content">
				{{-- <a href="job-list.html" class="btn btn-primary apply-btn">Apply Job</a> --}}
				<div class="container">
                    @yield('content')
				</div>
			</div>
        </div>
		<!-- /Main Wrapper -->

        <script src="{{ asset('assets/js/bundle.min.js') }}"></script>
        @yield('afterJs')	
		<!-- Custom JS -->
		<script src="{{ asset('assets/js/app.js') }}"></script>
		<script src="{{ asset('js/app.js') }}"></script>
		
    </body>
</html>