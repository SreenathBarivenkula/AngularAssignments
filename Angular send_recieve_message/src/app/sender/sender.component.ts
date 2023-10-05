import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
styleUrls: ['./sender.component.css']

})
export class SenderComponent {
  message = '';
  constructor(private messageService: MessageService) {}
  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendMessage(this.message);
      this.message = '';
    }
  }
}
