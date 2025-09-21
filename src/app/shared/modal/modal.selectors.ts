import { createFeatureSelector, createSelector } from "@ngrx/store";
import { modalStata } from "./modal.satate";

export const selectModalStateFeature =createFeatureSelector<modalStata>('modal')


export const selectModalStatus =createSelector(selectModalStateFeature,(state)=>state.modalstatus)
export const selectExamlStatus =createSelector(selectModalStateFeature,(state)=>state.examstatus)