import { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
fetch('https://albums-api-gk.web.app/albums')
.then(response => response.json())
.then(setAlbums)
.catch(alert)

}, [])  

return (
    <main className="album-list">
        {!albums
        ? <h2>Loading...</h2>
        : albums.map(thisAlbum => (
            <AlbumCard
            key={thisAlbum.albumId}
            thisAlbum={thisAlbum}
            setAlbums={setAlbums} />
        ))
    
    }
    </main>
)
}