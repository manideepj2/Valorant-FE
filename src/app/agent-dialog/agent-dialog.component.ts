import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-dialog',
  templateUrl: './agent-dialog.component.html',
  styleUrl: './agent-dialog.component.scss'
})

export class AgentDialogComponent implements OnInit{

  agentForm!: FormGroup;  // ! means any // !=any or u can write agentForm: FormGroup= new FormGroup({});
  // this is to initialize the variable agenrForm

  constructor(private _dialogRef: MatDialogRef<AgentDialogComponent>, private _fb:FormBuilder) { 
      //all ts files can only have 1 constructor
  }


  ngOnInit(): void {
    this.agentForm=this._fb.group({

      id:'',
      name:'',
      codeName:'',
      country:'',
      ability1:'',
      ability2:'',
      ability3:'',
      ultimate:'',
      role:'',
      description:''
  });
}

  onSave():void{

    if(this.agentForm.valid){
      // Save the agent
      console.log(this.agentForm.value); //this.agentForm.value is the value of the form
      this._dialogRef.close(); //dialogRef is a Mat module which refers to the dialog module which is in use or open
    }
    else{
      alert("Form is invalid, please check and try again");
      console.log("Form is invalid")
      this._dialogRef.close();
    }
  }

  onCancel(): void {
    // Close the dialog when the "CANCEL" button is clicked
    this._dialogRef.close(); //dialogRef is a Mat module which refers to the dialog module which is in use or open
  }
}
