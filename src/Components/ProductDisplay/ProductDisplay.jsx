import React, { useContext, useEffect, useState, useRef } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const randomNames = [
  'Alex M.', 'Samantha J.', 'Noah D.', 'Liam R.', 'Olivia S.', 'Daniel K.', 'Sophia L.',
  'Jacob T.', 'Ava G.', 'Mason C.', 'Carlos T.', 'Fatima N.', 'Tyrell G.', 'Mei L.',
  'Luna V.', 'James B.', 'Emma W.', 'Benjamin N.', 'Zoe K.', 'Leo R.'
];

const randomTexts = [
  'Exactly what I needed for school.',
  'Product works well, no complaints.',
  'Would definitely recommend to friends.',
  'Perfect for college students.',
  'Helped me stay organized.',
  'Decent quality for the price.',
  'Fast shipping and great support!',
  'Exceeded my expectations.',
  'Great value and super useful.',
  'I’m impressed with the build quality.',
  'Low quality. Broke after a week.',
  'Disappointed. Would not buy again.',
  'Terrible experience, avoid this.',
  'Customer service never replied.',
  'Item arrived damaged.',
  'Looks used, not new.'
];

const generateFakeReviews = () => {
  const reviewCount = Math.floor(Math.random() * 10) + 3;
  const reviews = [];

  for (let i = 0; i < reviewCount; i++) {
    const reviewer_name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const review_text = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    const rating = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
    reviews.push({ reviewer_name, review_text, rating });
  }

  return reviews;
};

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('desc');
  const [productReviews, setProductReviews] = useState([]);

  const initialReviews = useRef(null);

  useEffect(() => {
    if (!initialReviews.current || initialReviews.current.productId !== product.id) {
      const reviews = generateFakeReviews();
      initialReviews.current = { productId: product.id, reviews };
      setProductReviews(reviews);
    } else {
      setProductReviews(initialReviews.current.reviews);
    }
  }, [product]);

  const averageRating = productReviews.length
    ? (productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length).toFixed(1)
    : 0;

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {'⭐'.repeat(full)}
        {half && '⯪'}
        {'☆'.repeat(empty)}
      </>
    );
  };

  const handleCheckboxChange = () => setShowNotifyModal(true);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowNotifyModal(false);
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <>
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <div className='productdisplay-img-list'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={`/assets/${product.image}`} alt='' />
            ))}
          </div>
          <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={`/assets/${product.image}`} alt='' />
          </div>
        </div>

        <div className='productdisplay-right'>
          <h1>{product.name}</h1>
          <div className='productdisplay-right-stars'>
            <span>{renderStars(averageRating)}</span>
            <p>({productReviews.length})</p>
          </div>
          <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
          </div>
          <div className='productdisplay-right-description'>
            {product.description || 'No description available.'}
          </div>

          <p className={`productdisplay-stock ${product.stock === 0 ? 'out-of-stock' : ''}`}>
            <span>In stock:</span> {product.stock}
          </p>

          {product.stock > 0 ? (
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          ) : (
            <>
              <button disabled>OUT OF STOCK</button>
              <div className='notify-when-restocked'>
                <label>
                  <input type='checkbox' onChange={handleCheckboxChange} />
                  <span> Notify me when it's restocked</span>
                </label>
              </div>
            </>
          )}

          <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
          <p className='productdisplay-right-category'><span>Tags: </span>Used, Good Quality</p>
        </div>
      </div>

      {showNotifyModal && (
        <div className="notify-modal-overlay">
          <div className="notify-modal">
            {submitted ? (
              <div className="notify-success">✅ You’ll be notified when it's restocked!</div>
            ) : (
              <form onSubmit={handleNotifySubmit}>
                <h3>Get Notified</h3>
                <p>Enter your email and we’ll let you know when it’s restocked.</p>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Notify Me</button>
              </form>
            )}
          </div>
        </div>
      )}

      <div className="productdisplay-tabs">
        <div className="tabs">
          <button className={activeTab === 'desc' ? 'active' : ''} onClick={() => setActiveTab('desc')}>
            Description
          </button>
          <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>
            Reviews ({productReviews.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'desc' && (
            <p>{product.description || 'No product description available.'}</p>
          )}
          {activeTab === 'reviews' && (
            <>
              {productReviews.length === 0 ? (
                <p>No reviews yet for this product.</p>
              ) : (
                productReviews.map((review, index) => (
                  <div key={index} className="review" style={{ marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{review.reviewer_name}</div>
                    <div style={{ color: '#f5b50a', fontSize: '18px', marginBottom: '4px' }}>
                      {renderStars(review.rating)}
                    </div>
                    <div style={{ color: '#444' }}>{review.review_text}</div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;