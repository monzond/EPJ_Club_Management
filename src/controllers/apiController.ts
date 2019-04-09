import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";

export class ApiController {

    public async getMembersPaymentStatus(req: Request, res: Response) {
        try {
            const membersPaidCount = await (clubStore.getTotalMembershipPaidCount());
            const membersNotPaidCount = await (clubStore.getTotalMembershipNotPaidCount());
            const membersWarningCount = await (clubStore.getTotalMembershipWarningCount());

            res.json( {
                paymentStatus: [
                    membersPaidCount.paidMembershipCount,
                    membersNotPaidCount.notPaidMembershipCount,
                    membersWarningCount.warningCount,
                ],
            });
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersNotPaid(req: Request, res: Response) {
        try {
            const members = await (clubStore.getMembersFeeNotPaid());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getFinanceDashboard(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (clubStore.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (clubStore.getTotalMembershipPaid());
            const totalMembershipWarning = await (clubStore.getTotalMembershipWarning());

            res.json({
                totalMembershipNotPaid: totalMembershipNotPaid.notPaidMembership,
                totalMembershipPaid: totalMembershipPaid.paidMembership,
                totalMembershipWarning: totalMembershipWarning.warning,
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const apiController = new ApiController();