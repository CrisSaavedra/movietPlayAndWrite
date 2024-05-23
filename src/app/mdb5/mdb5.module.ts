import { NgModule } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';




@NgModule({
  declarations: [],
  imports: [
    MdbCollapseModule
  ],
  exports: [
    MdbCollapseModule,
    MdbFormsModule
  ]
})
export class Mdb5Module { }
