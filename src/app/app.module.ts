import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ChildComponent } from './MyComponent/child/child.component';
import { Child1Component } from './MyComponent/child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
