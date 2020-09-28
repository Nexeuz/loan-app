export interface RequestLoan {
  id: string;
  amount: number;
  userId: string;
  loanStatus: 'approved' | 'declined' | 'paid';
  creditPayment: boolean;
}

export function createRequestLoan(params: Partial<RequestLoan>) {
  return {
  } as RequestLoan;
}
