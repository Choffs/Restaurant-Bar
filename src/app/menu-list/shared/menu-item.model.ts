export class MenuItem
{
  itemName: string;
  itemType: string;
  itemPrice: string;
  itemCalories: string;
  itemPictureUrl: string;

  constructor(name: string,
    type: string,
    price: string,
    calories: string,
    pictureUrl: string)
    {
      this.itemName = name;
      this.itemType = type;
      this.itemPrice = price;
      this.itemCalories = calories;
      this.itemPictureUrl = pictureUrl;
    }
}
