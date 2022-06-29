import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from "./config.interface";



@Injectable()
export class ConfigService{
    
    configUrl = 'assets/config.json';  
    
    constructor(private http:HttpClient){}
    getConfig() {
        // now returns an Observable of Config
        return this.http.get<Config>(this.configUrl);
      }
}
