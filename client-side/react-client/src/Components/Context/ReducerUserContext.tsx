import {createContext, ReactNode, useReducer} from "react";
import { User } from "./UserContext";

interface AuthState {
    user: User | null;
}

interface AuthContextType {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}

interface AuthProviderProps{
    children: ReactNode;
}

type AuthAction = {type: 'LOGIN'; payload: User} | {type: "LOGOUT"};
const InitialAuthState: AuthState = {user: null};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null};
            default:
                throw new Error(`Unhandled action type: ${(action as AuthAction).type}`);
    }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, InitialAuthState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);