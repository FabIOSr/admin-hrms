<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if(in_array('', $request->only('username', 'password'))){
            $json['error'] = 'Atenção!, Informe todos os dados para efetuar o login';
            return response()->json($json);
        };

        $username = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? "email" : "registration";

        $credentials = [
            $username => $request->username,
            'password' => $request->password,
            'is_active' => true
        ];

        if(!Auth::attempt($credentials)){
            $json['error'] = 'Opss!, usuário ou senha não confere';
            return response()->json($json);
        }

        $name = auth()->user()->name;

        return response()->json([
            'message' => "Você efetou login como \" ${name} \", com sucesso!",
            'redirect' => url('/')
        ]);
    }
}
