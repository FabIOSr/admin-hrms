<?php

if(!function_exists('username')){
    function username($username){
        $username = explode(' ', $username);
        return $username[0];
    }
}