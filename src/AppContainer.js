import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadComments,loadContacts,loadProducts,loadVehicles } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadComments: function (comment) {
           dispatch(loadComments(comment));
         },
         loadContacts: function (contact) {
           dispatch(loadContacts(contact));
         },
         loadVehicles: function (vehicle) {
           dispatch(loadVehicles(vehicle));
         },
         loadProducts: function (product) {
           dispatch(loadProducts(product));
         }
  };
}

export default connect(null,mapDispatchToProps)(App);
