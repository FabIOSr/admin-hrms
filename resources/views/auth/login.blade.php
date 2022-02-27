@extends('layouts.guest')

@section('afterJs')
<script src="{{ asset('js/pages/auth/login.js') }}"></script>
<script>
    $(function(){
        toastr.info('Ola, Bem-Vindo, efetue seu login para ter acesso aos módulos!', 'Área de Login');        
    });
    
</script>
@endsection

@section('content')
<div class="account-box">
    <div class="account-wrapper">
        <h3 class="account-title">Login</h3>
        <p class="account-subtitle">Access to our dashboard</p>
        
        <!-- Account Form -->
        <form name="login" action="{{ route('login') }}" method="POST" autocomplete="off">
            <div class="form-group">
                <label>Usuário</label>
                <input 
                    name="username"
                    class="form-control" 
                    type="text"
                    value="517811"
                    autofocus>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label>Senha</label>
                    </div>
                    <div class="col-auto">
                        <a class="text-muted" tabindex="-1" href="forgot-password.html">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <input name="password" class="form-control" type="password">
            </div>
            <div class="form-group text-center">
                <button class="btn btn-primary account-btn" type="submit">Login</button>
            </div>
            <div class="account-footer">
                <p>Don't have an account yet? <a href="register.html">Register</a></p>
            </div>
        </form>        
    </div>
</div>
@endsection