import React, {useEffect, useState} from "react"
import {Header} from "../../../common/components/header/Header";
import {useParams} from "react-router";
import {AlbumItemType} from "./AlbumItemType";
import {AlbumItemStyle} from "./AlbumItemStyle";

export const AlbumItemForm = () =>{
    let {id} = useParams<{id?: string}>();
    let [albumItem, setAlbumItem] =  useState<AlbumItemType[]>();

    useEffect( () => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data) {
                        setAlbumItem(data);
                    }
                });
        }
    }, []);

    console.log(albumItem);
    if (albumItem){
        const item = albumItem.map((item:AlbumItemType) => {
            return(
                <li css={AlbumItemStyle.item} key={item.id}>
                   <img css={AlbumItemStyle.img}  src={item.url} alt=""/><br/>
                    {item.title}
                </li>
            );
        });

        return(
            <>
                <Header/>
                <div css={AlbumItemStyle.AlbumItem}>{item}</div>
            </>
        )
    }
    return null;
};