import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { CompanyModuleModule } from './company/company-module/company-module.module';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { ClientsModuleModule } from './clients/clients-module/clients-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModuleModule,
    AdminModuleModule,
    ClientsModuleModule,
    CustomMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
