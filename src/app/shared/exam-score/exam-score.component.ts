import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as QuetionSelactor from '../question/question.selectors'
import * as QuestionAction from '../question/question.actions'
import * as ModalActions from '../modal/modal.actions'

import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-exam-score',
    imports: [ChartModule],
    templateUrl: './exam-score.component.html',
    styleUrl: './exam-score.component.scss'
})
export class ExamScoreComponent implements OnInit, AfterViewInit {
    private readonly _store = inject(Store)
    numberOfQutions = 0

    NumberOfWronQuestions = 0

    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    getReport() {
        this._store.select(QuetionSelactor.selectNumberOfWronQuestions).subscribe({
            next: (num) => {
                this.NumberOfWronQuestions = num
            },

        });
        this._store.select(QuetionSelactor.selectNumberOfQuestions).subscribe({
            next: (num) => {
                this.numberOfQutions = num
            },

        })
    }

    closeModal() {
        this._store.dispatch(ModalActions.togglModal())
        this._store.dispatch(QuestionAction.ResetQuestionsState())
    }

    showResults() {
        this._store.dispatch(ModalActions.setExamlStatus({ examStatus: 'show Report' }));
    }


    initChart() {
        if (isPlatformBrowser(this.platformId)) {

            this.data = {
                labels: ['Wrong', 'Correct'],
                datasets: [
                    {
                        data: [this.NumberOfWronQuestions, this.numberOfQutions - this.NumberOfWronQuestions],
                        backgroundColor: ['red', 'green'],

                    }]
            };



        }
    }
    ngAfterViewInit(): void {
        this.initChart()
    }

    ngOnInit(): void {
        this.getReport()

    }
}
