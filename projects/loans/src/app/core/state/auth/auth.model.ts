export interface Profile {
  displayName: string;
  email: string;
  photoUrl: string;
  dni: string;
  id: string;
  amount: number;
  creditPayment: boolean | null;
  userStatus: 'Nuevo' | 'Aprobado' | 'Rechazado';
}

export function createAuth(params: Partial<Profile>) {
  return {
  } as Profile;
}
