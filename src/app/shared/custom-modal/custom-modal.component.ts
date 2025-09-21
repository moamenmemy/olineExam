import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import * as QuestionSelectors from '../question/question.selectors'
import { Dialog } from 'primeng/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { examstatus, modalstatus } from '../modal/modal.satate';
import * as ModalSelectors from '../modal/modal.selectors';
import * as ModalActions from '../modal/modal.actions';
import { AsyncPipe } from '@angular/common';
import { QuestionAdapt } from '../interFace/question';
import { FormsModule } from '@angular/forms';
import * as QuestionAction from'../question/question.actions'
import { ExamScoreComponent } from "../exam-score/exam-score.component";
import { ShowResulTsComponent } from "../show-resul-ts/show-resul-ts.component";
import { Subject as RxSubject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-custom-modal',
  imports: [Dialog, ButtonModule, AsyncPipe, FormsModule, ExamScoreComponent, ShowResulTsComponent],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent implements OnInit,OnDestroy {
  private readonly _store = inject(Store);
  ModalStatus$!: Observable<modalstatus>;
  ExamStatus$!: Observable<examstatus>;
currentQuestion!:QuestionAdapt |null
testStatus! :examstatus;
isBackBtnDisabled=true
isNextBtnDisabled=true
selectedAnswer:string=''
numOfQuestion= 0;
  isDialogVisible:boolean=false

private destroy$ = new RxSubject<void>();



  getModalStatus(){
        this.ModalStatus$ = this._store.select(ModalSelectors.selectModalStatus);
          this._store.select(ModalSelectors.selectModalStatus).pipe(takeUntil(this.destroy$)).subscribe({
            next:()=>{
              this.isDialogVisible=true
            }
          })
  }
  getExamStatus(){
        this.ExamStatus$ = this._store.select(ModalSelectors.selectExamlStatus);
      
        
  }

  getCurrenQuestion(){
    this._store.select(QuestionSelectors.selectcurrentQuestion).subscribe({
      next:(data)=>{
        this.currentQuestion=data as QuestionAdapt
      }
    })
  }

  getNumberOfQuestions(){
    this._store.select(QuestionSelectors.selectNumberOfQuestions).subscribe(
      {
        next:(num)=>{
          this.numOfQuestion=num;
        }
      }
    );
  }
  onSelectAnswer(){
    console.log(this.selectedAnswer)
    this.enableNextBtn()
  }



enableNextBtn(){
  this.isNextBtnDisabled=false
}
disableNextBtn(){
  this.isNextBtnDisabled=true
}
enableBackBtn(){
  this.isBackBtnDisabled=false
}
disableBackBtn(){
  this.isBackBtnDisabled=true
}

onNext(){

  console.log('onNext.hiii')
  this._store.dispatch(QuestionAction.updateQuestions({qid:this.currentQuestion?._id ?? '0',selectedAnswer:this.selectedAnswer}));

this.selectedAnswer =''

if(this.currentQuestion?.index === this.numOfQuestion -1){
console.log("endofnext")
  this.showReport()
  return
}


  this._store.dispatch(QuestionAction.onNext());

  if(this.currentQuestion?.selectedAnswer){
    this.selectedAnswer =this.currentQuestion.selectedAnswer
  this.enableNextBtn()
}else{
  this.disableNextBtn()

}

  this.enableBackBtn()

}

onBack(){
  this._store.dispatch(QuestionAction.onBack())


  this.selectedAnswer=this.currentQuestion?.selectedAnswer!;

  this.enableNextBtn()

  if(this.currentQuestion?.index ===0){
    this.disableBackBtn();
  }
}


  getPorgressArray(){
    return[... new Array(this.numOfQuestion)]
  }

closeExamModal() {
  console.log('Dialog closed');  
  this._store.dispatch(ModalActions.closeModal());
}




showReport(){
  
  this._store.dispatch(QuestionAction.filterWrongAnswers())
  
  this._store.dispatch(ModalActions.setExamlStatus({examStatus:'show Summary'}));  
}



ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

  ngOnInit(): void {
    this.getCurrenQuestion()
  this.getModalStatus();
  this.getExamStatus()

    this.getNumberOfQuestions()
  }
}
