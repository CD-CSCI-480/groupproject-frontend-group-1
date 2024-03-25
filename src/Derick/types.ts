export type ExpenseToPayItem={
    id: number
    task: string
    dueDate: string
    cost: number
    Items: ExpenseToPayItem[]
    deleteExpense: (ID: number)=>void
}

export type bank={
    id: number
    name: string
    image: string | null
}