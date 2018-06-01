import { GET_VEHICLES } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_VEHICLES:

      // const { Initials, Signatures } = action.payload;
      //
      // if (Initials && Signatures) {
      //   for (let i = 1; i < Signatures.length; i++){
      //     let mergeTag = `##SIGNATURE_${i}##`;
      //     action.payload.Body = action.payload.Body.replace(mergeTag, `<span class='signature-container'><img class='esign' src='${Signatures[i-1].ImageURL}' alt='Signatures${i}' data-req='${Signatures[i-1].Required}' /></span>`);
      //   }
      //
      //   for (let i = 1; i < Initials.length; i++){
      //     let mergeTag = `##INITIAL_${i}##`;
      //     action.payload.Body = action.payload.Body.replace(mergeTag, `<span class='signature-container'><img class='esign' src='${Initials[i-1].ImageURL}' alt='Initials${i}' data-req='${Initials[i-1].Required}' /></span>`);
      //   }
      // }
      //
      // action.payload.Body = action.payload.Body.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

      return action.payload;
    default:
      return state;
  }
}
