import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import AlbumCard from "../Components/AlbumCard"

export default function SingleAlbum() {
    const { album } = useParams()
    const [thisAlbum, setThisAlbum] = useState()
    useEffect(() => {
        //fetch/albums/albumId;
        fetch('https://albums-api-gk.web.app/albums')
        .then(response => response.json())
        .then(data => {
            const _thisAlbum = data.find(album => album.albumId === )
            setThisAlbum(_thisAlbum)
        })
        .catch(alert)

    }, [albumId])
    return (
        <>
        <Header title={thisAlbum ? thisAlbum.album : 'Loading...'} />
        {thisAlbum
        ? <AlbumCard thisAlbum={thisAlbum} />
        : null
        }
        </>
    )
}