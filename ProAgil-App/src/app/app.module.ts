import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule,  } from 'ngx-bootstrap/modal';
import { BsDatepickerModule  } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TituloComponent } from './_shared/titulo/titulo.component';
import { LOCALE_ID } from '@angular/core';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';




@NgModule({
  declarations: [AppComponent, NavComponent, EventosComponent, PalestrantesComponent, DashboardComponent, ContatosComponent, TituloComponent, DateTimeFormatPipePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,BrowserAnimationsModule,ReactiveFormsModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true}), BsDropdownModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot(), BsDatepickerModule.forRoot()],
  providers: [EventoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
