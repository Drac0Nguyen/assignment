import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IBuilder, IQuestionAndAnswers } from 'src/app/model/model';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  builder!: FormGroup;

  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private cdRef: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.builder = this.formBuilder.group({
      text: [''],
      questionAndAnswers: this.formBuilder.array([]),
      }
    )
  }

  getQuestionAndAnswers(){
    return this.builder.get('questionAndAnswers') as FormArray;
  }
  addQuestion() {
    const dialogRef = this.dialog.open(AnswersComponent, {
      width: '400px', // Set the width according to your preference
      // Add any other dialog configuration options here
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result); 
      if (result) {
        this.getQuestionAndAnswers().push(this.formBuilder.group(result));
        this.cdRef.detectChanges();
      }
    });
  }
  
  handleFormValue(value: any) {
    // Handle the form value here
    console.log('Form value from child component:', value);
    // You can perform any further actions with the form value here
  }

}
