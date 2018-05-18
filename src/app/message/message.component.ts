import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { Message } from './message';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
/*export class MessageComponent implements OnInit,OnChanges {
messages ;
userdata : string;
message:string;
receiver:string;
circle:string;
type:string;

@Input() messageObj:object;

  constructor(private messageService:MessageService) { }

ngOnChanges(value){

  console.log('value is',value);
  console.log('object in message',value.messageObj.currentValue.value);
  this.type=value.messageObj.currentValue.type;
  if(value.messageObj.currentValue.type=='user'){
  this.receiver=value.messageObj.currentValue.value;
  this.messageService.getMessageFromUser(value.messageObj.currentValue.value).subscribe(data =>{this.messages=data.json();})
  }
  else{
    this.messageService.getMessageByCircle(value.messageObj.currentValue.value).subscribe(data => {this.messages=data.json();})
  }
}

  ngOnInit() {
  }
 
  

}


import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Message } from "./message";
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})*/
export class MessageComponent implements OnInit, OnChanges {
  appname = "CHATS";
  sender: String;
  receiver: string;
  circle: String;
  message: any;
  msg: Message;
  type: string;
  @Input() messageObj: object;
  outmessageObj:object;
  userlogobj: string;
  //messages:Message[];
  
  messages:any[];

  constructor(private messageservice: MessageService) {

  }

  ngOnChanges(value) {
    this.outmessageObj=this.messageObj;
    this.messages = [];
    this.appname = "CHATS";
    console.log('Value is:', value);
    console.log("Object in message is:", value.messageObj.currentValue.value);
    this.receiver = value.messageObj.currentValue.value;
    this.type = value.messageObj.currentValue.type;
    console.log("userlog", this.userlogobj);
    if (this.type == 'user') {
       this.receiver = value.messageObj.currentValue.value;
      console.log("receiver: ", this.receiver);
      this.appname = value.messageObj.currentValue.value;
      this.messageservice.getMessagesFromUser(this.userlogobj, value.messageObj.currentValue.value).subscribe(data => {
        this.messages = data.json();
      })
    }
    else if (this.type == 'circle') {
       this.receiver = value.messageObj.currentValue.value;
      console.log("Circle: ", this.receiver);
      this.appname = value.messageObj.currentValue.value;
      this.messageservice.getMessagesFromCircle(value.messageObj.currentValue.value).subscribe(data => {
        this.messages = data.json();
      })
    }

  }

  onClick(msgs: string, type: string) {
    console.log("Message", msgs);
    console.log("Type:", type);

    //var request={'message':msg};
    this.msg = new Message();

    this.msg.message = msgs;
    this.msg.senderName = localStorage.getItem('username');

    if (type === 'user') {
      this.msg.receiverId = this.receiver;
      this.messageservice.sendMessageToUser(this.msg).subscribe(
        data => {
          console.log(data.status);
          if (data.status == 200) {
            let obj = {
              "senderName": localStorage.getItem('username'),
              "receiverId": this.receiver,
              "message": msgs
            }
            this.messages.push(obj);
          }
        }
      )
    }
    else if (type === 'circle') {
      this.msg.circleName = this.receiver;
      this.messageservice.sendMessageToCircle(this.msg).subscribe(
        data => {
          console.log(data.status);
          if (data.status == 200) {
            let obj = {
              "senderName": localStorage.getItem('username'),
              "circleName": this.receiver,
              "message": msgs
            }
            this.messages.push(obj);
          }
        }
      )
    }
    this.message=null;
  }
  ngOnInit() {
    this.userlogobj = localStorage.getItem('username');
  }
}
