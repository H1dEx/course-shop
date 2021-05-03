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
    Source: {name: string}
}

export interface ICategoryPayload {
    tags: ITag[]
    count: number
}

export interface ICoursePayload {
    courses: ICourse[]
    count: number
}

export interface ISourcePayload {
    sources: ISource[]
    count: number
}

export interface ISource {
    name: string
    description: string
    imagesource: null | string
}