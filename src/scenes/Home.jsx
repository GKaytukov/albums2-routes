import Header from "../Components/Header"
import AlbumList from "../Components/AlbumList"
import { Link } from "react-router-dom"

export default function Home () {
    return (
        <>
        <Header title={'Best-Selling Albums'} />
        <Link to="/albums/new">Add Album</Link>
        <AlbumList />
        
        </>
    )
}