"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockupService = void 0;
const common_1 = require("@nestjs/common");
const loginresponsemodel = require("./json/loginresponsemodel.json");
const logoutresponsemodel = require("./json/logoutresponsemodel.json");
const orderlistmodel = require("./json/orderlistmodel.json");
const statusresponsemodel_1 = require("./model/statusresponsemodel");
let MockupService = class MockupService {
    constructor() {
        this.mockup = [];
        this.usertrack = [];
    }
    getAllMock() {
        return this.mockup;
    }
    getOrderListByShopidAndBankingDate() {
        console.log(orderlistmodel);
        return orderlistmodel;
    }
    updateOrderStatus(responseObject) {
        console.log();
        console.log("inside if##", responseObject.status_id);
        var ResModel;
        if (responseObject.status_id === 2) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Sent to HO', 'SENT_TO_HO');
        }
        if (responseObject.status_id === 4) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Cancelled', 'CANCELLED');
        }
        if (responseObject.status_id === 5) {
            ResModel = new statusresponsemodel_1.StatusResponseModel('Order Accepted', 'ACCEPTED');
        }
        return ResModel;
    }
    createMockup(mockUpModel) {
        return loginresponsemodel;
    }
    logoutMockup(mockupLogoutModel) {
        console.log(logoutresponsemodel);
        return logoutresponsemodel;
    }
};
MockupService = __decorate([
    (0, common_1.Injectable)()
], MockupService);
exports.MockupService = MockupService;
//# sourceMappingURL=mockup.service.js.map