import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {

  public getTasks() {
    console.log('Retrieved Tasks')
  }

}
