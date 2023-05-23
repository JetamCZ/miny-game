export interface Game {
  id: string
  size: number
  status: "running" | "fail" | "finish"
  fields: {
    [key: string]: Field
  },
  flags: string[]
}

export interface FieldNumber {
  type: "number"
  value?: number
}

export interface FieldBomb {
  type: "bomb"
}

export type Field = FieldNumber | FieldBomb
