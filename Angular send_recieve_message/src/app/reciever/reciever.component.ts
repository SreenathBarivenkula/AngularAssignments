import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './reciever.component.html',
styleUrls: ['./reciever.component.css']
})
export class ReceiverComponent implements OnInit {
  messages: string[] = [];
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.messageService.getMessage().subscribe((message: string) => {
      if (message) {
        this.messages.push(message);
      }
    });
  }
  clearMessages() {
    this.messages = [];
    this.messageService.clearMessages();
  }
}
