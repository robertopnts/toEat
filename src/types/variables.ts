export interface Restaurant {
  name: string
  address: string
  status: RestaurantStatus
}

export enum RestaurantStatus {
  Recommended = 'Recommended',
  WantToTry = 'Want to Try',
  DoNotRecommend = 'Do not Recommend',
  MustTry = 'Must Try',
}