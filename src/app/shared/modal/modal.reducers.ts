import { createReducer, on, } from "@ngrx/store";
import { examstatus, initialModalStata,  modalstatus } from "./modal.satate";
import * as ModalActions from "./modal.actions";


export const modalReducer = createReducer(
  initialModalStata,
  on(ModalActions.openModal, (state) => ({
    ...state,
    modalstatus: 'open' as modalstatus,
    examstatus:'started' as examstatus
  })),
  on(ModalActions.closeModal, (state) => ({
    ...state,
    modalstatus: 'closed' as modalstatus
  })),
  on(ModalActions.setExamlStatus,(state,{examStatus})=>({
    ...state,
     examstatus:examStatus,
  })),



  on(ModalActions.togglModal, ()=>initialModalStata)
);
