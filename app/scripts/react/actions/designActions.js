import createObjectURL from '../utils/createObjectURL';
import {
  DESIGN_CHANGE_OPTION,
  DESIGN_SAVE,
  DESIGN_SAVE_SUCCESS,
  DESIGN_SAVE_FAIL
} from '../constants/actionTypes';

export function changeOption(name, value) {
  return {
    type: DESIGN_CHANGE_OPTION,
    name,
    value
  };
}

export function changeImage(name, file) {
  return changeOption(name, {
    id: null,
    url: file ? createObjectURL(file) : file
  });
}

export function saveChanges() {
  return (dispatch, getState) => {
    console.log(getState().design.get('current').toJS());


    const { counter } = getState();

    // if (counter % 2 === 0) {
    //   return;
    // }

    // dispatch(increment());
  };


  // return {
  //   types: [DESIGN_SAVE, DESIGN_SAVE_SUCCESS, DESIGN_SAVE_FAIL],
  //   promise: (client) => loadFromServer(client) 
  // };
}