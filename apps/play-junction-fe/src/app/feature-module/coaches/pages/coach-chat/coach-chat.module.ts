import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachChatRoutingModule } from './coach-chat-routing.module';
import { CoachChatComponent } from './coach-chat.component';


@NgModule({
  declarations: [
    CoachChatComponent
  ],
  imports: [
    CommonModule,
    CoachChatRoutingModule
  ]
})
export class CoachChatModule { }
