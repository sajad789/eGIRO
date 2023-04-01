import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule } from '@angular/material/paginator';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTableModule,
    SharedComponent
  ]
})
export class SharedModule { }
