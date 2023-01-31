import './index.css'

const Counter = props => {
  const {foodId, quantity, increaseQuantity, decreaseQuantity} = props

  const onDecrement = () => {
    decreaseQuantity(foodId)
  }

  const onIncrement = () => {
    increaseQuantity(foodId)
  }
  return (
    <div className="cart-arrow-buttons-container">
      <button
        type="button"
        className="cart-button"
        onClick={onDecrement}
        testid="decrement-quantity"
      >
        -
      </button>
      <p className="cart-quantity-number" testid="item-quantity">
        {quantity}
      </p>
      <button
        type="button"
        className="cart-button"
        onClick={onIncrement}
        testid="increment-quantity"
      >
        +
      </button>
    </div>
  )
}

export default Counter
