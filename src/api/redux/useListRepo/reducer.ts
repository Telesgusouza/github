import { IActionRepoData, IListRepo } from "../../interface";
import actionsType from "../actionsType";


const initialState: { listRepo: IListRepo } = {
  listRepo: {
    avatar: null,
    followers: 0,
    following: 0,
    location: "",

    title: "",
    description: "",

    listData: [],
  },
};

export default function useListRepo(state: { listRepo: IListRepo } = initialState, action: IActionRepoData) {
    if(action.type === actionsType.reloadData) {
        return {...state, listRepo: action.payload}
    }
}
