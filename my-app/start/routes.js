"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");

// Route.on("/").render("root");
// Route.on("/login").render("login");
Route.get("/adonis", () => "Hello Adonis");
Route.get('posts', 'NuevoController.index')


Route.get("/users", 'UsersControllers.index')

Route.on("/failLogin").render("failLogin");
Route.on("/signUp").render("signUp");
Route.on("/logout").render("logout");
Route.on("/productos").render("main");
Route.on("/chat").render("about");

Route.on("*").render("error");
