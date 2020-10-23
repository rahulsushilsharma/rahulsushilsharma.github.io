import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContectMeComponent } from './contect-me/contect-me.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { JsprojectsComponent } from './jsprojects/jsprojects.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { JsprojecgtsComponent } from './jsprojecgts/jsprojecgts.component';
import { OwlApiComponent } from './jsprojecgts/owl-api/owl-api.component';
import { SortingComponent } from './jsprojecgts/sorting/sorting.component';
import { BubbleSortComponent } from './jsprojecgts/sorting/bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './jsprojecgts/sorting/merge-sort/merge-sort.component';
import { QuickSortComponent } from './jsprojecgts/sorting/quick-sort/quick-sort.component';

// import { OwlApiComponent } from './jsprojects/owl-api/owl-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContectMeComponent,
    NotFoundComponent,
    MainpageComponent,
    JsprojecgtsComponent,
    OwlApiComponent,
    SortingComponent,
    BubbleSortComponent,
    MergeSortComponent,
    QuickSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
