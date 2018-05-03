import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import * as Web3 from 'web3';

@Injectable()
export class BlockchainUtilsService {

    constructor(private http: Http) {
    }

    getWeb3() {
        let web3 = window["web3"];
        if (typeof (web3) !== undefined) {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        return web3;
    }

}