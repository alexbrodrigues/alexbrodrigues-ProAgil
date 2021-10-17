import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule,  } from 'ngx-bootstrap/modal';
import { BsDatepickerModule  } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { ToastrModule } from 'ngx-toastr';

import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TituloComponent } from './_shared/titulo/titulo.component';
import { LoginComponent } from './user/user/login/login.component';
import { RegistrationComponent } from './user/user/registration/registration.component';
import { UserComponent } from './user/user/user.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EventoEditComponent } from './eventos/eventoEdit/eventoEdit.component';




@NgModule({
  declarations: [AppComponent, NavComponent, EventosComponent, EventoEditComponent, PalestrantesComponent, DashboardComponent, ContatosComponent, TituloComponent, UserComponent, RegistrationComponent, LoginComponent, DateTimeFormatPipePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,BrowserAnimationsModule,ReactiveFormsModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true}), BsDropdownModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot(), BsDatepickerModule.forRoot(), TabsModule.forRoot(), NgxMaskModule.forRoot(), NgxCurrencyModule],
  providers: [EventoService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
