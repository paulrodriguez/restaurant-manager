<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  use AuthenticatesUsers;

  //protected $redirectTo = route('admin.restaurants.index');

  public function __construct()
  {
    $this->middleware('admin_guest:admin')->except('logout');
  }

  protected function redirectTo() {
    return route('admin.dashboard.index');
  }

  protected function guard()
  {
    return Auth::guard('admin');
  }
  public function showLoginForm()
  {
      return view('auth.admin.login');
  }


}
