import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    receiverMail:"",
    subject:"",
    textMessage:""
  }

  spinFlagRunning= false;           // Bydefault spinner ko FALSE rakhege

  constructor(private emailservice:EmailService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Trying to submit email form");
    console.log("Data : ", this.data);

    if(this.data.receiverMail=='' || this.data.subject=='' || this.data.textMessage=='' )
    {
        this.snack.open("Fields cannot be Empty !", "OK");
        return;
    }

    this.spinFlagRunning=true;                          // yaha pe spinner ko TRUE kar de rahe hai
    this.emailservice.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.spinFlagRunning=false;               // yaha pe wapas se spinner ko FALSE kar de rahe hai
        this.snack.open("Send Success ! ","OK");
      },
      error=>{
        console.log(error);
        this.spinFlagRunning=false;
        this.snack.open("Mail Sent ! ","OK");
      }
    );
  }


}
