export interface Profile {
  displayName: string;
  email: string;
  photoUrl: string;
  dni: string;
}

export function createAuth(params: Partial<Profile>) {
  return {
  } as Profile;
}
