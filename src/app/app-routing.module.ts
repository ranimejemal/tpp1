import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotfoundComponent } // wildcard (always last)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
