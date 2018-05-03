import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { AuthenticationService } from '../../../../auth/_services';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {

    private chainData: any;


    constructor(private _script: ScriptLoaderService, private authService: AuthenticationService) {

    }
    ngOnInit() {
        this.chainData = this.authService.mockChainData();
        localStorage.setItem('data', JSON.stringify(this.chainData))

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

    }


}