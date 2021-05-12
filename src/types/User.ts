export default interface User {
  email: string;
  password?: string;
  username?: string;
  UserAnswers?: { SecurityQuestion: SecurityQuestion; id: number }[];
  id?: number;
}

export interface SecurityQuestion {
  id: number;
  isActive?: boolean;
  content: string;
}

export interface SecurityAnswer {
  content: string;
  securityQuestionId: number;
}
