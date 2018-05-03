import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    login(email: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    mockChainData() {
        return {
            totalValueSupply: 1450,
            soldValueToken:1000,
            remainingValueToken: 450,
            totalAccSupply: 5675,
            soldAccToken: 5000,
            remainingAccToken: 675
        }
    }
}