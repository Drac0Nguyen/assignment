import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IQuestionAndAnswers } from 'src/app/model/model';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {
  questionAndAnswers!: FormGroup;
  selectedAnswerType: string = 'Checkbox';
  @Output() formValueOutside = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AnswersComponent>
  ) {
    this.questionAndAnswers = this.fb.group({
      AnswerType:[this.selectedAnswerType],
      question: [''],
      answers: this.fb.array([]),
      allowUserToSpecifyThierOwnAnswers: [false],
      ThisFiledIsRequired: [false]
      
    });
  }
  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
  get answers(): FormArray {
    return this.questionAndAnswers.get('answers') as FormArray;
  }

  onChangeAnswerType() {
    if (this.selectedAnswerType === 'text') {
      // Reset the answers FormArray when changing to text answer type
      this.answers.clear();
    }
  }

  addCheckbox() {
    this.answers.push(this.fb.control(''));
  }

  onSubmit() {
    this.pushControlsOutsideDialog();
    this.dialogRef.close(this.questionAndAnswers.value);
  }
  private pushControlsOutsideDialog() {
    const formValue = this.questionAndAnswers.value;
    this.formValueOutside.emit(formValue);
  }
}
