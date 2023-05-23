
const Nav = ({onSearchChange}) => {
    
    const handleSearchChange = (e) => {
        console.log (e.target.value);
        onSearchChange (e.target.value);
    }
    
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand">Marvel</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange}/>
                        <button type="submit" className="button">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default Nav;