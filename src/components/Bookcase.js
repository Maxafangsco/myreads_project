const Bookcase = (props) => {
    const {bookshelves} =props;

    return (
        <div className="list-books-content">
            <div>
                {bookshelves.map(shelf => (
                    <Bookshelf key={shelf.key} shelf={shelf} />
                ))}
            </div>
        </div>
    )
}
export default Bookcase