import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form.component";
import { BuilderComponent } from "./builder/builder.component";
import { RouterConstants } from "src/app/constant/RouterConstants";
import { AnswersComponent } from "./answers/answers.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";

const route: Routes = [
  {
    path: "",
    component: FormComponent,
    data: {title: 'form'},
    children: [
      {
        path: RouterConstants.BULDER,
        component: BuilderComponent,
        data: {title: 'builder'},
      },


    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(route),
    FormsModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  declarations: [
    BuilderComponent,
    AnswersComponent,
    FormComponent,
  ],
  exports: [
    FormComponent
  ],
  providers:[]
})
export class FormModule {

}
