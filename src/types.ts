export type User = {
    id: string
    username: string
    status: string
    password: string
}

export type Post = {
    id: number
    created_at: string,
    created_by: string,
    title: string,
    message: string
}

export type UserArray = User[];

export type PostArray = Post[];