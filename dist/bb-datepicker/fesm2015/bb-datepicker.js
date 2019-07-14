import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BbDatepickerService {
    constructor() { }
}
BbDatepickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BbDatepickerService.ctorParameters = () => [];
/** @nocollapse */ BbDatepickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BbDatepickerService_Factory() { return new BbDatepickerService(); }, token: BbDatepickerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BbDatepickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BbDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bb-bb-datepicker',
                template: `
    <input type="date" />
  `
            }] }
];
/** @nocollapse */
BbDatepickerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BbDatepickerModule {
}
BbDatepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BbDatepickerComponent],
                imports: [],
                exports: [BbDatepickerComponent]
            },] }
];

export { BbDatepickerComponent, BbDatepickerModule, BbDatepickerService };
//# sourceMappingURL=bb-datepicker.js.map
