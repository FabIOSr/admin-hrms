<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
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

        //$this->authenticated($request->getClientIp());

        return response()->json([
            'message' => "Você efetou login como \" ${name} \", com sucesso!",
            'redirect' => route('welcome')
        ]);
    }

    private function authenticated(string $ip)
    {
        $user = Auth::user();
        $user->update([
            'last_login_at' => date('Y-m-d H:i:s'),
            'last_login_ip' => $ip,
        ]);

    }

    public function register(Request $request)
    {
        dd($request->all());
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
