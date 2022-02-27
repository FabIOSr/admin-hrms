@extends('layouts.guest')

@section('afterJs')
<script src="{{ asset('js/pages/auth/register.js') }}"></script>
@endsection


@section('content')
<div class="account-box">
    <div class="account-wrapper">
        <h3 class="account-title">Registro</h3>
        <p class="account-subtitle">Cadastro de Usuário</p>
        
        <!-- Account Form -->
        <form name="register" action="{{ route('register') }}" method="POST" autocomplete="off">
            <div class="form-group">
                <label>ID</label>
                <input 
                    name="registration" 
                    class="form-control" 
                    type="text" 
                    autofocus
                    value="{{ old('registration') }}"
                    required
                    placeholder="Matricula"
                >
            </div>

            <div class="form-group">
                <label>Nome</label>
                <input name="name" class="form-control" type="text" value="{{ old('name') }}" placeholder="Nome completo">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input name="email" class="form-control" type="email" value="{{ old('email') }}" placeholder="Seu melhor e-mail">
            </div>
            <div class="form-group">
                <label>Senha</label>
                <input name="password" class="form-control" type="password" placeholder="Senha">
            </div>
            <div class="form-group">
                <label>Confirmar Senha</label>
                <input name="password_confirmation" class="form-control" type="password" placeholder="Confirmar senha">
            </div>
            <div class="form-group text-center">
                <button class="btn btn-primary account-btn" type="submit">Registrar</button>
            </div>
            <div class="account-footer">
                <p>Already have an account? <a href="login.html">Login</a></p>
            </div>
        </form>
        <!-- /Account Form -->
    </div>
</div>
@endsection