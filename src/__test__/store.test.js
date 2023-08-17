import store from "../redux/store";
import { fetchShow } from "../redux/Show/ShowSlice";

describe('store',()=>{
    test('Show that the state is empty',()=>{
        const initialState = store.getState().show;
        expect(initialState).toEqual({shows: [], isLoading: false, error: null,});
    });

    test('Shows that the state is having the data',async ()=>{
        await store.dispatch(fetchShow());
        const updatedState = store.getState().show;
        expect(updatedState.shows.length).toBeGreaterThan(1);
    })
})