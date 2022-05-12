import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../slices/cart/cartSlice";

const mapStateToProps = (state) => ({
  books: state.cart.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartProp: (index) => {
    dispatch(removeFromCart(index));
  },
});

const Cart = ({ books, removeFromCartProp }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {books.map((book, i) => (
          <li key={i} className="my-4">
            <Button
              variant="danger"
              onClick={() => {
                removeFromCartProp(i);
              }}
            >
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {books.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
