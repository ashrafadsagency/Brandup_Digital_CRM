export type ClientStatus = 'Lead' | 'Active' | 'Inactive' | 'Closed';
export type PaymentStatus = 'Paid' | 'Partial' | 'Pending' | 'Overdue';
export type TaskStatus = 'Pending' | 'In Progress' | 'Review' | 'Completed';
export interface Client { id:string; business_name:string; contact_person?:string; phone?:string; email?:string; industry?:string; status:ClientStatus; monthly_fee?:number; }
