export interface IPattern {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  intent: string;
  mindset: string;
  weekDaysOccurring: {
    mo: string,
    tu: string
    we: string
    th: string
    fr: string
    sa: string
    su: string
  };
}
