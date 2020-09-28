export interface RequestLoan {
  id: string;
  amount: number;
  userId: string;
  loanStatus: 'Aprobado' | 'Rechazado' | 'Pagado';
  creditPayment: boolean;
}

export function createRequestLoan(params: Partial<RequestLoan>) {
  return {
  } as RequestLoan;
}
