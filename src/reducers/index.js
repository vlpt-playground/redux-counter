import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

// 초기 상태를 정의합니다.
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})

// 리듀서 함수를 정의합니다. 
function counter(state = initialState, action) {
    const counters = state.get('counters');

    switch(action.type) {
        // 카운터를 새로 추가합니다
        case types.CREATE:
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })))
        // slice 를 이용하여 맨 마지막 카운터를 제외시킵니다
        case types.REMOVE:
            return state.set('counters', counters.pop());

        // action.index 번째 카운터의 number 에 1 을 더합니다.
        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index, 
                (counter) => counter.set('number', counter.get('number') + 1))
            );

        // action.index 번째 카운터의 number 에 1 을 뺍니다
        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index, 
                (counter) => counter.set('number', counter.get('number') - 1))
            );

        // action.index 번째 카운터의 색상을 변경합니다
        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index, 
                (counter) => counter.set('color', action.color))
            );
        default:
            return state;
    }
};

export default counter;