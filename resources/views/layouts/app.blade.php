<!DOCTYPE html>
<html lang="en">
    @includeIf('layouts.includes.head')
	@livewireStyles
    <body>
		<!-- Main Wrapper -->
        <div class="main-wrapper">
		
			<!-- Header -->
            @includeIf('layouts.includes.header')
			<!-- /Header -->
			
			<!-- Sidebar -->
            @includeIf('layouts.includes.sidebar')
			<!-- /Sidebar -->
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">
					
					<!-- Content Starts -->
						@yield('content')
					<!-- /Content End -->
					
                </div>
				<!-- /Page Content -->
				
            </div>
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->
		
		@includeIf('layouts.includes.scripts')
		@livewireScripts
		
    </body>
</html>