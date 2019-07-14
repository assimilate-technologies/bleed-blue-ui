(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('bb-datepicker', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['bb-datepicker'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BbDatepickerService = /** @class */ (function () {
        function BbDatepickerService() {
        }
        BbDatepickerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BbDatepickerService.ctorParameters = function () { return []; };
        /** @nocollapse */ BbDatepickerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function BbDatepickerService_Factory() { return new BbDatepickerService(); }, token: BbDatepickerService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [BbDatepickerComponent],
                        imports: [],
                        exports: [BbDatepickerComponent]
                    },] }
        ];
        return BbDatepickerModule;
    }());

    exports.BbDatepickerComponent = BbDatepickerComponent;
    exports.BbDatepickerModule = BbDatepickerModule;
    exports.BbDatepickerService = BbDatepickerService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bb-datepicker.umd.js.map
