/*
   createAction
*/ 
import {
   CHANGE_COUNT
} from '../types-constant';

export function changeCount(newCount) {
   return {
      type: CHANGE_COUNT,
      msg: newCount
   };
}
