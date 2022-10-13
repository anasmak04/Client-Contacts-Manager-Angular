import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { CompanyModuleModule } from './company/company-module/company-module.module';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { ClientsModuleModule } from './clients/clients-module/clients-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModuleModule,
    AdminModuleModule,
    ClientsModuleModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
