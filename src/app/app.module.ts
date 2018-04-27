import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        HerosComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule, MatIconModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
