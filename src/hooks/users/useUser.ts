import React from "react";
import {
    useSelector,
    useDispatch,
} from "react-redux";
import {
    resolveDeleteUser,
    resolveGetAllUsers, setSelectedUser
} from "@/store/user/user.reducer";
import {AppDispatch} from "@/store/app.store";

const useUser = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const {
        users,
    } = useSelector((state: any) => state.user);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleGetAllUsers = async () => {
        dispatch(resolveGetAllUsers());
    }

    const handleDeleteUser = async (id: string) => {
        dispatch(resolveDeleteUser(id));
    }

    const handleSelectUser = (id: string) => {
        dispatch(setSelectedUser(id));
    }

    return{
        datas:{
            users,
            isOpen,
        },
        methods:{
            handleOpenModal,
            handleCloseModal,
            handleDeleteUser,
            handleSelectUser,
            handleGetAllUsers,
        }
    }
}

export default useUser
