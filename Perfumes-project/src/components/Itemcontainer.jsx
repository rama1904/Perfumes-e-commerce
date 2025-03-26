import React from 'react';

// const perfumes = [
//   { id: 1, name: 'Perfume A', price: 50, image: 'perfume1.jpg' },
//   { id: 2, name: 'Perfume B', price: 60, image: 'perfume2.jpg' },
// ];

function ItemContainer() {
  return (
    <div className="row">
      {perfumes.map((perfume) => (
        <div key={perfume.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={`/assets/images/${perfume.image}`} className="card-img-top" alt={perfume.name} />
            <div className="card-body">
              <h5 className="card-title">{perfume.name}</h5>
              <p className="card-text">${perfume.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemContainer;




