// eslint-disable-next-line

declare module 'knex/types/tables' {
  export interface Tables {
    trnasactions: {
      id: string
      title: string
      amount: number
      create_at: string
      session_id?: string
    }
  }
}
