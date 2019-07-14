import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BbDatepickerService = /** @class */ (function () {
    function BbDatepickerService() {
    }
    BbDatepickerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BbDatepickerService.ctorParameters = function () { return []; };
    /** @nocollapse */ BbDatepickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BbDatepickerService_Factory() { return new BbDatepickerService(); }, token: BbDatepickerService, providedIn: "root" });
    return BbDatepickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BbDatepickerComponent = /** @class */ (function () {
    function BbDatepickerComponent() {
    }
    /**
     * @return {?}
     */
    BbDatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BbDatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bb-bb-datepicker',
                    template: "\n    <input type=\"date\" />\n  "
                }] }
    ];
    /** @nocollapse */
    BbDatepickerComponent.ctorParameters = function () { return []; };
    return BbDatepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BbDatepickerModule = /** @class */ (function () {
    function BbDatepickerModule() {
    }
    BbDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BbDatepickerComponent],
                    imports: [],
                    exports: [BbDatepickerComponent]
                },] }
    ];
    return BbDatepickerModule;
}());

export { BbDatepickerComponent, BbDatepickerModule, BbDatepickerService };
//# sourceMappingURL=bb-datepicker.js.map
