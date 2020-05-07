import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {EmojiModule} from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {CommonModule} from '@angular/common';
import {MdoButtonModule} from '@ctrl/ngx-github-buttons';
import {SnackbarComponent} from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PickerModule,
    EmojiModule,
    MdoButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
