import { LogoutStatus, MockupLogoutModel } from './mockup.logoutmodel';
import { MockupModel, LoginResponseModel } from './mockup.model';
import { StatusResponseModel } from './model/statusresponsemodel';
import { ModuleRequestModel } from './model/modulerequestmodel';
import { CreateOrderRequestModel } from './model/createorderrequestmodel';
export declare class MockupService {
    private mockup;
    private usertrack;
    getAllMock(): MockupModel[];
    getOrderListByShopidAndBankingDate(): any;
    updateOrderStatus(responseObject: any): any;
    updateModule(req: ModuleRequestModel): StatusResponseModel;
    createOrder(req: CreateOrderRequestModel): StatusResponseModel;
    createMockup(mockUpModel: MockupModel): LoginResponseModel;
    logoutMockup(mockupLogoutModel: MockupLogoutModel): LogoutStatus;
    getAllItems(shop_id: number): {
        order_date: string;
        lw_order_date_sales: string;
        lw_order_date_3_weeks_average_sales: string;
        lw_order_date_climate: string;
        lw_order_date_temp: string;
        exp_next_delv_date: string;
        exp_next_delv_date_total_qty: string;
        next_delv_date: string;
        lw_next_delv_date_sales: string;
        lw_next_delv_3_weeks_average_sales: string;
        lw_next_delv_date_climate: string;
        lw_next_delv_date_temp: string;
        data: {
            role: string;
            "role-items": {
                category: string;
                items: {
                    "stocked-items": {
                        id: number;
                        name: string;
                        case_size: string;
                        ps_cost: number;
                        sl_shop: number;
                        sl_open: number;
                        next_del_qty: number;
                        last_week_usage: number;
                        last_3week_avg_usage: number;
                        expected_delv_qty: number;
                        last_week_del_day_usage: number;
                        last_3week_avg_del_day_usage: number;
                    }[];
                    "unstocked-items": {
                        id: number;
                        name: string;
                        case_size: string;
                        ps_cost: number;
                        sl_shop: number;
                        sl_open: number;
                        next_del_qty: number;
                        last_week_usage: number;
                        last_3week_avg_usage: number;
                        expected_delv_qty: number;
                        last_week_del_day_usage: number;
                        last_3week_avg_del_day_usage: number;
                    }[];
                };
            }[];
        }[];
    };
    getShopInfo(shop_id: number): {
        shop_id: number;
        curreny: string;
        banking_date: string;
        workingdays: number[];
        deliverydays: number[];
        orderdays: number[];
    };
}
