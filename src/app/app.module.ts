import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { ClosetabComponent } from './components/closetab/closetab.component';
import { OpentabComponent } from './components/opentab/opentab.component';
import { ClickingComponent } from './components/clicking/clicking.component';
import { FormsModule } from '@angular/forms';
import { AssigmentsComponent } from './components/assigments/assigments.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ClosetabComponent,
    OpentabComponent,
    ClickingComponent,
    AssigmentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
