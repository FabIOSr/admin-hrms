<div class="page-header">
    <div class="row align-items-center">
        <div class="col">
            <h3 class="page-title">{{ $title }}</h3>
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void()">Dashboard</a></li>
                <li class="breadcrumb-item active">{{ $title }}</li>
            </ul>
        </div>
        <div class="col-auto float-right ml-auto">
            {{ $slot }}
        </div>
    </div>
</div>