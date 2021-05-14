import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
    { path: "contact", component: ContactComponent },
    { path: "**", component: HomeComponent}
]

@NgModule({
    declarations: [ AppComponent, NavComponent, ContactComponent, HomeComponent ],
    imports: [ BrowserModule,
    RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [ AppComponent ],
    exports: [ RouterModule ]
})

export class AppModule{

}