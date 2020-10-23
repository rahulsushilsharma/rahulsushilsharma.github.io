import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContectMeComponent } from './contect-me/contect-me.component';
import { JsprojecgtsComponent } from './jsprojecgts/jsprojecgts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [{
  path: "",
  component: MainpageComponent,
},

{
  path: "js-projects",
  component: JsprojecgtsComponent,
},

{
  path: "contact-me",
  component: ContectMeComponent,
},

{
  path: "**",
  component: NotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
