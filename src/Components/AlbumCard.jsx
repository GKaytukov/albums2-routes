import { Link } from "react-router-dom"

export default function AlbumCard({ thisAlbum, setAlbums }) {

    function deleteAlbum() {
        //We are going delete from the handleFormSubmit section under NewAlbumFrom.jsx

        fetch(`http://127.0.0.1:5002/albums/${thisAlbum.albumId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => {
                fetch('https://albums-api-gk.web.app/albums')
                    .then(response => response.json())
                    .then(setAlbums)
                    .catch(alert)
                console.log(data)
            })
            .catch(alert)

    }

    return (
        <>
            <Link to={`/albums/${thisAlbum.albumId}`} >
                <div className="album-card">
                    <h3 className="album-title">{thisAlbum.title}</h3>
                    <p>{thisAlbum.artist}, {thisAlbum.year}</p>

                </div>
            </Link>
            <button type="reset"
                onClick={() => deleteAlbum()}>Reset</button>
        </>

    )
}