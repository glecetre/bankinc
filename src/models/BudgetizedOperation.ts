export interface BudgetizedOperation {
    label: string;
    date?: Date;
    isSavings?: boolean;
    amount: number;
}