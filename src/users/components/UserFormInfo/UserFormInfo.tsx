import React, {useEffect, useState} from "react";
import {Header} from "../../../common/components/header/Header";
import {useParams} from "react-router";
import {UserType} from "./UserTypes";
import {UserFormInfoStyles} from "./UserFormInfoStyles";

export const UserFormInfo = ():React.ReactElement | null => {
    let {id} = useParams<{id?: string}>();
    let [user, setUser] =  useState<UserType>();
    useEffect( () => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data){
                        setUser(data);
                    }
                });
        }
    }, [id])

    if (user){
        return (
            <div css={UserFormInfoStyles.wrapUser}>
                <Header/>
                <div css={UserFormInfoStyles.wrap}>
                    <div>{user.name}</div>
                    <div>From the city {user.address.city}</div>
                </div>
            </div>
        )
    }

     return null;
};


