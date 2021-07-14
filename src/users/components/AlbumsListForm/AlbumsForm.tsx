import React, {useEffect, useState} from "react";
import {Header} from "../../../common/components/header/Header";
import {AlbumsType} from "./AlbumsType";
import {Link} from "react-router-dom";
import {AlbumsFormStyles} from "./AlbumsFormStyles";


export const AlbumsForm = () => {
    let [albums, setPhotos] =  useState<AlbumsType[]>();
    useEffect( () => {
            fetch(`https://jsonplaceholder.typicode.com/albums`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data){
                        setPhotos(data);
                       // setPhotos(data.map((item:PhotoType) =>item.albumId).filter((value:string,index:number,self:string) => self.indexOf(value)===index))
                    }
                });
    }, []);

    if (albums){
        const albumsList = albums.map((item:AlbumsType) => {
            return(
                <li key={item.id} css={AlbumsFormStyles.albumItem} >
                    <Link css={AlbumsFormStyles.link} to={`/albums/${item.id}/photos`}>{item.title}</Link>
                </li>
                );
        });

         return (
            <div css={AlbumsFormStyles.albumsFormWrap}>
                <Header/>
                <ul css={AlbumsFormStyles.list}>{albumsList}</ul>
            </div>
        )
    }
    return null;
};