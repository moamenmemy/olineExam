

export  type modalstatus = 'notstarted' | 'open' |'closed'
export  type examstatus =  'notstarted'|'started' |'show Report'| 'show Summary'

export interface modalStata{
    modalstatus:modalstatus,
    examstatus:examstatus
}


export const initialModalStata:modalStata={
modalstatus:'notstarted',
examstatus:'notstarted'
}