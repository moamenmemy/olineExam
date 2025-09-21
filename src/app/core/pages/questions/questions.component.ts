import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ExamOnSubjectService } from '../../srvices/exam-on-subject.service';
import { Observable, Subject as RxSubject, takeUntil} from 'rxjs';
import { Store } from '@ngrx/store';
import { modalstatus } from '../../../shared/modal/modal.satate';
import * as ModalSelectors from '../../../shared/modal/modal.selectors';
import * as ModalActions from '../../../shared/modal/modal.actions'
import { AsyncPipe } from '@angular/common';
import { CustomModalComponent } from "../../../shared/custom-modal/custom-modal.component";
import * as QuestionSelectors from '../../../shared/question/question.selectors'
import { Question, QuestionAdapt } from '../../../shared/interFace/question';
import { Exam } from '../../../shared/interFace/allExams/exams';

@Component({
  selector: 'app-questions',
  imports: [DashboardComponent, AsyncPipe, CustomModalComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit,OnDestroy {

private destroy$ = new RxSubject<void>();

    subjectId!: string;
exams: Exam[] = [];

 questions$!: Observable<QuestionAdapt[]>; 
  constructor(private route: ActivatedRoute,private examService:ExamOnSubjectService) {}

  private readonly _store =inject(Store)


  ModalStatus$! :Observable<modalstatus>
  ngOnInit() {
   this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.subjectId = params.get('id')!;
      console.log('Subject ID:', this.subjectId);

console.log(this.exams)
 this.getExamOnSubject()
  });

  this.getModalStatas()

this.questions$ = this._store.select(QuestionSelectors.selectQuestions);


  }


  getExamOnSubject(){
  this.examService.examOnSubject(this.subjectId).pipe(takeUntil(this.destroy$)).subscribe({
    next:(res)=>{
      console.log(res.exams)
      this.exams=res.exams
    },error:(err)=>{
      console.log(err)
    }
  })
  }

  ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete()
  }

getModalStatas(){
this.ModalStatus$ = this._store.select(ModalSelectors.selectModalStatus)
}

openExamModal(id:string){
   

  console.log('openModal clicked');
  this._store.dispatch(ModalActions.openModal({ examId: id }));
}


}
