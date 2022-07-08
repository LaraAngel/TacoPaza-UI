import {Injectable} from '@angular/core';
import {FoodProductEntity} from "../../../../models/sales/foods/FoodProductEntity";
import {Status} from "../../../../models/utils/Status.interface";
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() {
  }


}

const status = new Status("1", "Activo");
const tacosCategory = new FoodCategoryEntity(1, "Tacos", status );
const tortasCategory = new FoodCategoryEntity(2, "Tortas", status );
const bebidasCategory = new FoodCategoryEntity(3, "Bebidas", status );

let getFoodProductTacos = [new FoodProductEntity(1, "Pastor", tacosCategory, 14, status),
  new FoodProductEntity(1, "Chorizo", tacosCategory, 14, status),
  new FoodProductEntity(1, "Asada", tacosCategory, 18, status),
  new FoodProductEntity(1, "Barbacoa", tacosCategory, 19, status),
  new FoodProductEntity(1, "Cabeza", tacosCategory, 14, status),
  new FoodProductEntity(1, "Labio", tacosCategory, 16, status),
  new FoodProductEntity(1, "Lengua", tacosCategory, 28, status),
  new FoodProductEntity(1, "Maciza", tacosCategory, 15, status),
  new FoodProductEntity(1, "Buche", tacosCategory, 15, status),
  new FoodProductEntity(1, "Surtido", tacosCategory, 15, status)];
const foodsProducts: FoodProductEntity[] = [
  ...getFoodProductTacos,

  new FoodProductEntity(1, "Pastor",  tortasCategory, 48, status),
  new FoodProductEntity(1, "Asada",  tortasCategory, 51, status),
  new FoodProductEntity(1, "Pastor c/ Queso",  tortasCategory, 69, status),
  new FoodProductEntity(1, "Asada c/ Queso",  tortasCategory, 69, status),
  new FoodProductEntity(1, "Ahogada",  tortasCategory, 35, status),

  new FoodProductEntity(1, "Regresco Familiar",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Regresco taparrosca",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Agua Fresca Ch",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Agua Freca Med.",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Agua Freca Gde.",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Agua natural",  bebidasCategory, 15, status),
  new FoodProductEntity(1, "Cerveza",  bebidasCategory, 15, status)


]
