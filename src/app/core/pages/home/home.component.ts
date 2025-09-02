import { Component, inject } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AlllExamsService } from '../../srvices/alll-exams.service';
import { AllSubjectsService } from '../../srvices/all-subjects.service';
import { Subject } from '../../../shared/interFace/subjects/subjects';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

_allSubjectsService=inject(AllSubjectsService)


allSubjectsList:Subject[]=[]
 showAll = false;

ngOnInit():void{
  this.getAllSubjects()
}

getAllSubjects(){
  this._allSubjectsService.allSubjects().subscribe({
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

}
