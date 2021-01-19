import React, {Component} from 'react';

class Category extends Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                    </ol>
                </div>
            </div>
        )
    }
}
export default Category;