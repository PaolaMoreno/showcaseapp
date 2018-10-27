  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatTabsModule } from '@angular/material/tabs';
  import { AppComponent } from './app.component';
  import { HeaderComponent } from './components/common/header/header.component';
  import { FooterComponent } from './components/common/footer/footer.component';
  import { MainContentComponent } from './components/main/main-content/main-content.component';
  import { LandingComponent } from './components/main/landing/landing.component';
  import { MatGridListModule } from '@angular/material/grid-list';
  import { MatExpansionModule } from '@angular/material/expansion';
  import { MatButtonModule } from '@angular/material/button';
  import { AppRoutingModule } from './/app-routing.module';
  import { FlexLayoutModule} from '@angular/flex-layout';

  



  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MainContentComponent,
      LandingComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatGridListModule,
      MatExpansionModule,
      MatButtonModule,
      AppRoutingModule,
      FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
