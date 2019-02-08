// Reducer with the switch condition
export default function(state={}, action){
    switch(action.type){
        case 'CITY_LIST':
            return {...state,citylist:action.payload};
        case 'CITY_DETAIL':
            return {...state,citydetail:action.payload.results};
        default:
            return state;
    }
}