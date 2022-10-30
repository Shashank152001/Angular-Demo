import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './MyComponent/header/header.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ChildComponent } from './MyComponent/child/child.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path: 'about',component:AboutComponent},
  {path: 'child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
