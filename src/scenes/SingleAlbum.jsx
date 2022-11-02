import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../Components/Header"
import AlbumCard from "../Components/AlbumCard"

export default function SingleAlbum() {
    const { albumId } = useParams()
    const [thisAlbum, setThisAlbum] = useState()
    useEffect(() => {
        //fetch/albums/albumId;
        fetch('https://albums-api-gk.web.app/albums')
        .then(response => response.json())
        .then(data => {
            const _thisAlbum = data.find( album => album.albumId === albumId)
            setThisAlbum(_thisAlbum)
        })
        .catch(alert)

    }, [albumId])
    return (
        <>
        <Header title={thisAlbum ? thisAlbum.album : 'Loading...'} />
        <Link to="/">&lt; Back</Link>
        {thisAlbum
        ? <AlbumCard thisAlbum={thisAlbum} />
        : null
        }
        </>
    )
}