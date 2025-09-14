import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";

import { AllSubjectsService } from '../../srvices/all-subjects.service';
import { Subject } from '../../../shared/interFace/subjects/subjects';
import { takeUntil } from 'rxjs';
import { Subject as RxSubject} from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [DashboardComponent,RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {

_allSubjectsService=inject(AllSubjectsService)

private destroy$ = new RxSubject<void>();

allSubjectsList:Subject[]=[]
 showAll = false;

ngOnInit():void{
  this.getAllSubjects()
}

getAllSubjects(){
  this._allSubjectsService.allSubjects().pipe(takeUntil(this.destroy$)).subscribe({
    next:(res)=>{
      console.log(res.subjects)
      this.allSubjectsList=res.subjects
    },error:(err)=>{
      console.log(err)
    }
  })
}


 


  get displayedSubjects(): Subject[] {
    return this.showAll ? this.allSubjectsList : this.allSubjectsList.slice(0, 6);
  }

  toggleView() {
    this.showAll = !this.showAll;
  }

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete()
}


}
