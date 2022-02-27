<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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
        $validated = Validator::make($request->all(),[
            'registration' => ['required','min:4','unique:users,registration'],
            'name' => ['required','min:6'],
            'email' => ['required','email'],
            'password' => ['required','min:4','confirmed'],
        ]);

        if($validated->fails()){
            $json['error'] = 'Atenção aos erros de validação.';
            $json['errors'] = $validated->errors();
            return response()->json($json);
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'registration' => $request->registration,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'redirect' => route('login'),
            'message' => "Login criado com sucesso, efetue seu login"
        ]);
        
        
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
