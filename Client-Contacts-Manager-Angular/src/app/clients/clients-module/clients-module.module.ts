import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientPageComponent } from '../client-page/client-page.component';
import { ReactiveFormsModule , FormsModule} from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
@NgModule({
  declarations: [
    ClientPageComponent,
    ClientFormComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule
  ]
})
export class ClientsModuleModule { }
