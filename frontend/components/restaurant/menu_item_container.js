import { connect } from "react-redux";
import MenuItem from "./menu_item";
import { addCartItem } from "../../actions/cart_actions";

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (quantity, item) => dispatch(addCartItem(quantity, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);