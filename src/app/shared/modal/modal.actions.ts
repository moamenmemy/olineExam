import { createAction, props } from "@ngrx/store";
import { examstatus } from "./modal.satate";

 export const openModal =createAction ('[Modal] open Modal', props<{ examId: string }>())

 export const closeModal =createAction ('[Modal] close Modal')

 export const togglModal =createAction ('[Modal] toggl Modal')
 export const setExamlStatus =createAction ('[Modal] Set Exam Status',props<{examStatus:examstatus}>())