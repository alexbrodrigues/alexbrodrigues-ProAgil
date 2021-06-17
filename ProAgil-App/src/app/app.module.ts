import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';

import { EventoService } from './_services/evento.service';

@NgModule({
  declarations: [AppComponent, EventosComponent, NavComponent, DateTimeFormatPipePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BsDropdownModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot(), BrowserAnimationsModule],
  providers: [EventoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
