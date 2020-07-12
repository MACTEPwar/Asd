import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CardModule} from 'primeng/card';
import {TreeModule} from 'primeng/tree';
import {DragDropModule} from 'primeng/dragdrop';

import { PlitkaComponent } from './plitka/plitka.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { MenuItem2TreeNodePipe } from './pipes/menu-item2-tree-node.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlitkaComponent,
    DashboardComponent,
    DefaultComponent,
    MenuItem2TreeNodePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TreeModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
