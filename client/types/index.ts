export interface ITag {
    id: number
    tag: string
    createdAt: string
    updatedAt: string
}

export interface ICourse {
    id: number
    description: string
    coursename: string
    createdAt: string
    updatedAt: string
    imagesource: string | null
}