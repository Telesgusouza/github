export interface IListRepo {
  avatar: null | File;
  followers: number;
  following: number;
  location: string;

  title: string;
  description: string;

  listData: unknown[];
}

export interface IActionRepoData {
  type: string;
  payload: IListRepo;
}

export interface IRootReducer {
  useListRepo: { listRepo: IListRepo };
}
