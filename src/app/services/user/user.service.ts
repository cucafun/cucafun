import { User } from "../../models/user/user.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  public user: User;
  constructor(){

  }

  
}
