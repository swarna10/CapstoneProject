import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Message} from './message/message';
@Injectable()
export class MessageService {
 /* constructor(private http: Http) { }
 username:string;
 circle:string;
  private BASE_URL ='http://localhost:8084/api/message/';

  getUsers(){
  return this.http.get(this.BASE_URL);
  }

  getMessageFromUser(username:any){
    this.username=username;
    return this.http.get(this.BASE_URL+ 'getMessageByUser/'+username+'/'+2)
  }
  getMessageByCircle(circle){
    this.circle=circle;
    return this.http.get(this.BASE_URL+ 'getMessageByCircle/'+circle+'/2')
  }*/
  username: string;
  circle: string;

  private MESSAGE_SERVICE_BASE_URL = "http://localhost:8084/api/";
  private ApiUrl = 'message/';
  private ServerWithApiUrl;
  headerObj = new Headers({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  constructor(private http: Http) {
  }
  getMessagesFromUser(loguser: any, UserName: any) {
      this.ServerWithApiUrl =
          this.MESSAGE_SERVICE_BASE_URL + this.ApiUrl;
      console.log("In service");
      return this.http.get(this.ServerWithApiUrl + 'getMessagesByUser/' + loguser + '/' + UserName + '/' + 2, { headers: this.headerObj });
  }
  getMessagesFromCircle(CircleName: any) {
      this.ServerWithApiUrl =
          this.MESSAGE_SERVICE_BASE_URL + this.ApiUrl;
      console.log("In service");
      return this.http.get(this.ServerWithApiUrl + 'getMessagesByCircle/' + CircleName + '/' + 2, {headers:this.headerObj});
  }
  sendMessageToUser(message: Message) {
      this.ServerWithApiUrl =
          this.MESSAGE_SERVICE_BASE_URL + this.ApiUrl;
      console.log("In service");
      return this.http.post(this.ServerWithApiUrl + 'sendMessageToUser/' + message.receiverId, message, { headers: this.headerObj });
  }
  sendMessageToCircle(message: Message) {
      this.ServerWithApiUrl =
          this.MESSAGE_SERVICE_BASE_URL + this.ApiUrl;
      console.log("In service");
      return this.http.post(this.ServerWithApiUrl + 'sendMessageToCircle/' + message.circleName, message, { headers: this.headerObj });
  }
}
