export interface UserInitialState {
    users:{
        isLoading: boolean,
        isError: boolean,
        isSuccess: boolean,
        errorMessage: string,
        data: [],
        selectedUser: string,
    }
}

export interface UsersColumn {
    id: 'firstName' | 'lastName' | 'email' | 'role' | 'action' | '_id';
    label: string;
    minWidth?: number;
    align?: 'right';
    hidden?: boolean;
    format?: (value: number) => string;
}

export interface UsersData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    cart: [];
    favorite: [];
}
