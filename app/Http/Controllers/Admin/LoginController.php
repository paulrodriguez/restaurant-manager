<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  use AuthenticatesUsers;

  protected $redirectTo = '/admin/restaurants';

  public function __construct()
  {
    $this->middleware('admin_guest:admin')->except('logout');
  }

  protected function guard()
  {
    return Auth::guard('admin');
  }
  public function showLoginForm()
  {
    echo 'in login for amdin';
      return view('auth.admin.login');
  }


}
