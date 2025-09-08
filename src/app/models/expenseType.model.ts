export interface ExpenseType {
    id: string;
    name: string;
    description: string;
    max_amount: number;
    spent: number;
    isEdited?: boolean;
}